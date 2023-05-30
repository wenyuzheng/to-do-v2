import todosReducer from "../../../features/todos/todosReducer";

describe("Todos", () => {
  test("todos/todoAdded", () => {
    const state = [{ id: 0, text: "Todo 1", complete: false }];
    const action = { type: "todos/todoAdded", payload: "Todo 2" };
    const expected = [
      { id: 0, text: "Todo 1", complete: false },
      { id: 1, text: "Todo 2", complete: false },
    ];
    expect(todosReducer(state, action)).toEqual(expected);
  });

  test("todos/todoDeleted", () => {
    const state = [
      { id: 0, text: "Todo 1" },
      { id: 1, text: "Todo 2" },
    ];
    const action = { type: "todos/todoDeleted", payload: 0 };
    const expected = [{ id: 1, text: "Todo 2" }];
    expect(todosReducer(state, action)).toEqual(expected);
  });

  test("todos/todoToggled eg1", () => {
    const state = [
      { id: 0, text: "Todo 1", complete: false },
      { id: 1, text: "Todo 2", complete: false },
    ];
    const action = { type: "todos/todoToggled", payload: 1 };
    const expected = [
      { id: 0, text: "Todo 1", complete: false },
      { id: 1, text: "Todo 2", complete: true },
    ];
    expect(todosReducer(state, action)).toEqual(expected);
  });

  test("todos/todoToggled eg2", () => {
    const state = [
      { id: 0, text: "Todo 1", complete: true },
      { id: 1, text: "Todo 2", complete: false },
    ];
    const action = { type: "todos/todoToggled", payload: 0 };
    const expected = [
      { id: 0, text: "Todo 1", complete: false },
      { id: 1, text: "Todo 2", complete: false },
    ];
    expect(todosReducer(state, action)).toEqual(expected);
  });

  test("todos/todoColoured", () => {
    const state = [
      { id: 0, text: "Todo 1" },
      { id: 1, text: "Todo 2" },
    ];
    const action = {
      type: "todos/todoColoured",
      payload: { id: 0, colour: "red" },
    };
    const expected = [
      { id: 0, text: "Todo 1", colour: "red" },
      { id: 1, text: "Todo 2" },
    ];
    expect(todosReducer(state, action)).toEqual(expected);
  });
});
