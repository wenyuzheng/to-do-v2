import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import _ from "lodash";
import { selectFilteredTodoIds } from "./todosReducer";

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds);

  return (
    <div>
      {todoIds.map((id) => (
        <TodoItem key={id} todoId={id} />
      ))}
    </div>
  );
};

export default TodoList;
