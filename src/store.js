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

// const enhancer = logStateEnhancer;
// const enhancer = myApplyMiddleware([sayHiMiddleware, sayByeMiddleware]);
const enhancer = myApplyMiddlewareWithStore([
  //   logStateMiddleware,
  //   say100Middleware,
]);

const store = legacy_createStore(reducer, enhancer);

export default store;
