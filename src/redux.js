const redux = require("redux");
const createStore = redux.createStore;
const intialState = {
  number: 0,
}
// Reducer
const counterReducer = (state = intialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "increment_by_1":
      newState.number++;
      break;
    case "increment_by_10":
      newState.number += 10;
      break;
      
      case "decrement_by_10":
        newState.number += 10;
        break;
      default:
        break;
  }
  return newState;
}
// Store
const store = createStore(counterReducer);
// Subscriber
store.subscribe(() => {
  console.log(store.getState());
});
// Action
store.dispatch({ type: "increment_by_1" });
store.dispatch({ type: "increment_by_1" });
store.dispatch({ type: "increment_by_10" });
store.dispatch({ type: "decrement_by_1" });
store.dispatch({ type: "decrement_by_10" });
