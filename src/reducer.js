import todosReducer from "./features/todos/todosReducer";
import filterssReducer from "./features/filters/filtersReducer";

export default (state = {}, action) => {
  return {
    todos: todosReducer(state.todos, action),
    filters: filterssReducer(state.filters, action),
  };
};
