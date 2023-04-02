import { createStore } from 'redux';

const initialState = {
  nightMode: false,
  notifyMe: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NIGHT_MODE':
      return { ...state, nightMode: !state.nightMode };
    case 'TOGGLE_NOTIFICATION':
      return { ...state, notifyMe: !state.notifyMe };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
