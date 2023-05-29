import _ from "lodash";
import nextTodoId from "../../functions/nextTodoId";

export default (state, action) => {
  const copy = _.cloneDeep(state);

  switch (action.type) {
    case "todos/todoAdded":
      copy.push({ id: nextTodoId(state), text: action.payload });
      return copy;

    case "todos/todoDeleted":
      copy.splice(action.payload, 1);
      return copy;

    case "todos/todoToggled":
      const result = copy.map((todo) => {
        if (todo.id === action.payload)
          return {
            ...todo,
            completed: !todo.completed,
          };
        return todo;
      });
      return result;

    default:
      return state;
  }
};
