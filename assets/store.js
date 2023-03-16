import { createStore } from 'redux';

const initialState = {
  nightMode: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NIGHT_MODE':
      return { ...state, nightMode: !state.nightMode };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
