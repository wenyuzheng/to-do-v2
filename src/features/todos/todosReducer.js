import _ from "lodash";
import nextTodoId from "../../functions/nextTodoId";

const initialState = [
  { id: 0, text: "abc", complete: true },
  { id: 1, text: "dgashd", complete: false },
  { id: 2, text: "szsss", complete: false },
];

export default (state = initialState, action) => {
  const copy = _.cloneDeep(state);

  switch (action.type) {
    case "todos/todoAdded":
      copy.push({
        id: nextTodoId(state),
        text: action.payload,
        complete: false,
      });
      return copy;

    case "todos/todoDeleted":
      const filtered = copy.filter((e) => e.id !== action.payload);
      return filtered;

    case "todos/todoToggled":
      const toggledResult = copy.map((todo) => {
        if (todo.id === action.payload)
          return {
            ...todo,
            complete: !todo.complete,
          };
        return todo;
      });
      return toggledResult;

    case "todos/todoColoured":
      const colouredResult = copy.map((todo) => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            colour: action.payload.colour,
          };
        return todo;
      });
      return colouredResult;

    default:
      return state;
  }
};

export const todosAdded = (todo) => {
  return {
    type: "todos/todoAdded",
    payload: todo,
  };
};

export const todosDeleted = (todoId) => {
  return {
    type: "todos/todoDeleted",
    payload: todoId,
  };
};

export const todoToggled = (todoId) => {
  return {
    type: "todos/todoToggled",
    payload: todoId,
  };
};

export const todoColoured = (todoId, colour) => {
  return {
    type: "todos/todoColoured",
    payload: { id: todoId, colour: colour },
  };
};
