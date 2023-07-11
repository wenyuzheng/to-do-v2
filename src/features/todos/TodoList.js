import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import filteredTodosSelector from "./filteredTodosSelector";
import _ from "lodash";
import { selectTodoIds } from "./todosReducer";

const TodoList = () => {
  const filters = useSelector((state) => state.filters);
  // const todoIds = useSelector(
  //   (state) => filteredTodosSelector(state.todos, filters).map((e) => e.id),
  //   (a, b) => _.isEqual(a, b)
  // );

  const todoIds = useSelector(selectTodoIds);

  return (
    <div>
      {todoIds.map((id) => (
        <TodoItem key={id} todoId={id} />
      ))}
    </div>
  );
};

export default TodoList;
