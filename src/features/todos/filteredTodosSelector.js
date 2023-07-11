import { createSelector } from "reselect";

export const filterTodosShowing = (todos, showing) => {
  if (showing === "Completed") {
    return todos.filter((todo) => todo.complete);
  }
  if (showing === "Incomplete") {
    return todos.filter((todo) => !todo.complete);
  }
  return todos;
};

export const filterTodosColour = (todos, colours) => {
  if (colours.length === 0) return todos;
  return todos.filter((todo) => colours.includes(todo.colour));
};

export const selectFilteredTodos = createSelector(
  (state) => state.todos,
  (state) => state.filters,
  (todos, filters) => {
    const filteredColour = filterTodosColour(todos, filters.colours);
    const filtered = filterTodosShowing(filteredColour, filters.showing);
    return filtered;
  }
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((e) => e.id)
);
