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

    default:
      return state;
  }
};
