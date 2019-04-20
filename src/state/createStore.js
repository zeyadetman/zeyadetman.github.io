import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `TOGGLE_MODE`) {
    return Object.assign({}, state, {
      mode: state.mode === "day" ? "night" : "day"
    });
  }

  return state;
};

let initialStateStorage;

try {
  if(!localStorage.getItem("mode")){
    localStorage.setItem('mode', 'day');
  };

  initialStateStorage = localStorage.getItem("mode") || "day"
} catch (err) {
  console.log(err);
}

const initialState = {
  mode: initialStateStorage === "night" ? "night" : "day"
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
