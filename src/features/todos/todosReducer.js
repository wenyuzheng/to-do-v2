import _ from "lodash";
import nextTodoId from "../../functions/nextTodoId";

const initialState = [];

export default (state = initialState, action) => {
  const copy = _.cloneDeep(state);

  switch (action.type) {
    case "todos/todoAdded":
      copy.push({ id: nextTodoId(state), text: action.payload });
      return copy;

    case "todos/todoDeleted":
      copy.splice(action.payload, 1);
      return copy;

    case "todos/todoToggled":
      const toggledResult = copy.map((todo) => {
        if (todo.id === action.payload)
          return {
            ...todo,
            completed: !todo.completed,
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
