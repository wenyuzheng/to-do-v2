import { legacy_createStore } from "redux";
import reducer from "./reducer";
import { logStateEnhancer } from "./enhancers";
import {
  logStateMiddleware,
  say100Middleware,
  sayByeMiddleware,
  sayHiMiddleware,
} from "./middlewares";
import {
  myApplyMiddleware,
  myApplyMiddlewareWithStore,
  myApplySingleMiddleware,
} from "./functions/middleware";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosReducer";
import filtersReducer from "./features/filters/filtersReducer";

// const enhancer = logStateEnhancer;
// const enhancer = myApplyMiddleware([sayHiMiddleware, sayByeMiddleware]);
const enhancer = myApplyMiddlewareWithStore([
  //   logStateMiddleware,
  //   say100Middleware,
]);

// const store = legacy_createStore(reducer, enhancer);

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

export default store;
