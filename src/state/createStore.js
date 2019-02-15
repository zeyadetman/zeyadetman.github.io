import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `TOGGLE_MODE`) {
    return Object.assign({}, state, {
      mode: state.mode === "day" ? "night" : "day"
    });
  }

  return state;
};

const initialState = { mode: "day" };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
