export const sayHiMiddleware = (dispatch) => {
  const newDispatch = (action) => {
    console.log("Hi");
    dispatch(action);
  };
  return newDispatch;
};

export const sayByeMiddleware = (dispatch) => {
  const newDispatch = (action) => {
    dispatch(action);
    console.log("Goodbye");
  };
  return newDispatch;
};

export const logStateMiddleware = (store) => {
  return (dispatch) => {
    return (action) => {
      dispatch(action);
      console.log(store.getState());
    };
  };
};

export const say100Middleware = (store) => {
  return (dispatch) => {
    return (action) => {
      dispatch(action);
      console.log("100");
    };
  };
};
