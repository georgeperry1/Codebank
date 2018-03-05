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
      return {
        ...state,
        passedId: action.passedId
      }
    case SHOW_VAULT:
      return {
        ...state,
        fetching: true
      }
    case SHOW_VAULT_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      selectedVault: action.vault
    }
    case SHOW_VAULT_FAIL:
      return {
        ...state,
        fetching: false,
        fetching: false
      }
    default:
      return state;
  }
}
