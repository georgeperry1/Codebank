'use strict'

import {
  SHOW_VAULT,
  SHOW_VAULT_SUCCESS,
  SHOW_VAULT_FAIL
} from '../Actions/VaultActions';

const defaultState = {
  fetching: false,
  fetched: false,
  selectedVault: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_VAULT:
    console.log('SHOW_VAULT reducer');
      return {
        ...state,
        fetching: true
      }
    case SHOW_VAULT_SUCCESS:
    console.log('SHOW_VAULT_SUCCESS reducer', action.vault);
    return {
      ...state,
      fetching: false,
      fetched: true,
      selectedVault: action.vault
    }
    case SHOW_VAULT_FAIL:
    console.log('SHOW_VAULT_FAIL reducer');
      return {
        ...state,
        fetching: false,
        fetching: false
      }
    default:
      return state;
  }
}
