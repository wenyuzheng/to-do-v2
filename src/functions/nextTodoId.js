export default (list) => {
  const max = list.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return max + 1;
};
