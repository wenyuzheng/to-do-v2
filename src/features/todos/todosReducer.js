import _ from "lodash";
import nextTodoId from "../../functions/nextTodoId";

const initialState = [
  { id: 0, text: "abc" },
  { id: 1, text: "dgashd" },
  { id: 2, text: "szsss" },
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
