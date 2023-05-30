export const composeMiddlewares = (middlewares) => {
  return (dispatch) => {
    return middlewares.reduce((curr, m) => m(curr), dispatch);
  };
};

export const myApplySingleMiddleware = (middleware) => {
  return (createStore) => {
    return (reducer, preloadedState, enhancer) => {
      const store = createStore(reducer, preloadedState, enhancer);
      const newDispatch = middleware(store.dispatch);
      return { ...store, dispatch: newDispatch };
    };
  };
};

export const myApplyMiddleware = (middlewares) => {
  return (createStore) => {
    return (reducer, preloadedState, enhancer) => {
      const store = createStore(reducer, preloadedState, enhancer);
      const composedMiddleware = composeMiddlewares(middlewares);
      const newDispatch = composedMiddleware(store.dispatch);
      return { ...store, dispatch: newDispatch };
    };
  };
};

export const myApplyMiddlewareWithStore = (middlewares) => {
  return (createStore) => {
    return (reducer, preloadedState, enhancer) => {
      const store = createStore(reducer, preloadedState, enhancer);
      const simpleMiddlewares = middlewares.map((m) => m(store));
      const composedMiddleware = composeMiddlewares(simpleMiddlewares);
      const newDispatch = composedMiddleware(store.dispatch);
      return { ...store, dispatch: newDispatch };
    };
  };
};
