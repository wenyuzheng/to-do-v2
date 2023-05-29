import todosReducer from "../../../features/todos/todosReducer";

describe("Todos", () => {
  test("todos/todoAdded", () => {
    const state = [{ id: 0, text: "Todo 1" }];
    const action = { type: "todos/todoAdded", payload: "Todo 2" };
    const expected = [
      { id: 0, text: "Todo 1" },
      { id: 1, text: "Todo 2" },
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
});
