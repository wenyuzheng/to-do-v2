import { composeMiddlewares } from "../../functions/middleware";

describe("composeMiddlewares", () => {
  test("eg 1", () => {
    const dispatch = (action) => {};
    const m1 = (dispatch) => {
      return (action) => {
        action.m1 = 1;
        dispatch(action);
      };
    };
    const m2 = (dispatch) => {
      return (action) => {
        action.m2 = 2;
        dispatch(action);
      };
    };
    const m3 = (dispatch) => {
      return (action) => {
        action.m3 = 3;
        dispatch(action);
      };
    };
    const action = {};
    const composed = composeMiddlewares([m1, m2, m3]);
    const newDispatch = composed(dispatch);
    newDispatch(action);
    expect(action).toEqual({ m1: 1, m2: 2, m3: 3 });
  });
});
