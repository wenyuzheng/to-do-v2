import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const addTodoHandler = () => {
    dispatch({ type: "todos/todoAdded", payload: userInput });
    setUserInput("");
  };

  return (
    <div>
      <input onChange={onChangeHandler} value={userInput} />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
