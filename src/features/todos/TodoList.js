import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import filteredTodosSelector from "./filteredTodosSelector";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filtered = filteredTodosSelector(todos, filters);

  console.log("list is rendering");

  return (
    <div>
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
