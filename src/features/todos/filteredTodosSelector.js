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

export default (todos, filters) => {
  const filteredColour = filterTodosColour(todos, filters.colours);
  const filtered = filterTodosShowing(filteredColour, filters.showing);
  return filtered;
};
