'use strict'

import {
  REQUEST_VAULTS,
  RECEIVE_VAULTS,
  RECEIVE_VAULTS_FAIL,
  CREATE_VAULT,
  CREATE_VAULT_FAIL
} from '../Actions/VaultActions';

const defaultState = {
  fetching: false,
  fetched: false,
  vaults: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_VAULTS:
      return {
        ...state,
        fetching: true
      }
    case RECEIVE_VAULTS_FAIL:
      return {
        ...state,
        fetching: false,
        fetched: false
      }
    case RECEIVE_VAULTS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        vaults: action.vaults
      }
    case CREATE_VAULT:
      return {
        ...state,
        vaults: [
          ...state.vaults,
          {
            name: action.vault.name,
            url: action.vault.url,
            description: action.vault.description,
            _id: action.vault._id,
            crypts: action.vault.crypts
          },
        ]
      }
    case CREATE_VAULT_FAIL:
      return {
        ...state,
        vaults: state.vaults.filter(vault => vault.name !== action.vault.name)
      }
    default:
      return state;
  }
}
