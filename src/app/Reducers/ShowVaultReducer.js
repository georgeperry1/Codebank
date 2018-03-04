'use strict';

const defaultState = {
  selectedVault: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_VAULT':
    console.log(action.vault);
    return {
      ...state,
      selectedVault: action.vault
    }
    default:
      return state;
  }
}
