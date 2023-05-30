export const logStateEnhancer = (createStore) => {
  const newCreateStore = (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);
    const newDispatch = (action) => {
      store.dispatch(action);
      console.log(store.getState());
    };
    return {
      ...store,
      dispatch: newDispatch,
    };
  };
  return newCreateStore;
};
