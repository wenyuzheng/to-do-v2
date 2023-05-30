import { useDispatch } from "react-redux";

const TickBox = ({ id }) => {
  const dispatch = useDispatch();
  const onChangeHandler = () => {
    dispatch({ type: "todos/todoToggled", payload: id });
  };

  return <input type="checkbox" onChange={onChangeHandler} />;
};

const TodoItem = ({ todo }) => {
  return (
    <div style={{ display: "inline-flex" }}>
      <TickBox id={todo.id} />
      <div>{todo.text}</div>
    </div>
  );
};

export default TodoItem;
