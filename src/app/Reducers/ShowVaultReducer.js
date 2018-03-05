'use strict'

import {
  SHOW_VAULT,
  SHOW_VAULT_SUCCESS,
  SHOW_VAULT_FAIL,
  PASS_VAULT_ID
} from '../Actions/VaultActions';

const defaultState = {
  passedId: '',
  fetching: false,
  fetched: false,
  selectedVault: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PASS_VAULT_ID:
      console.log('PASS Reducer dispatched:', action.passedId);
      return {
        ...state,
        passedId: action.passedId
      }
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
