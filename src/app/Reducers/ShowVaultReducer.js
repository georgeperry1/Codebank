'use strict'

import {
  SHOW_VAULT,
  SHOW_VAULT_SUCCESS,
  SHOW_VAULT_FAIL
} from '../Actions/VaultActions';

const defaultState = {
  fetching: false,
  fetched: false,
  selectedVault: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
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
      selectedVault: action.vaultId
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
