import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import filteredTodosSelector from "./filteredTodosSelector";
import _ from "lodash";

const TodoList = () => {
  const filters = useSelector((state) => state.filters);
  const todoIds = useSelector(
    (state) => filteredTodosSelector(state.todos, filters).map((e) => e.id),
    (a, b) => _.isEqual(a, b)
  );

  return (
    <div>
      {todoIds.map((id) => (
        <TodoItem key={id} todoId={id} />
      ))}
    </div>
  );
};

export default TodoList;
