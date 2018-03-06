'use strict'

import {
  REQUEST_VAULTS,
  RECEIVE_VAULTS,
  RECEIVE_VAULTS_FAIL,
  CREATE_VAULT,
  CREATE_VAULT_FAIL
} from '../Actions/VaultActions';
// import { vaultSchema, cryptSchema, gemSchema } from '../Middleware/vaultSchema';

const defaultState = {
  fetching: false,
  fetched: false,
  vaults: {}
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
      const reducedVaults = action.vaults.reduce((obj, vault) => {
        let vault_id = vault._id;
        return Object.assign(obj, {[vault_id]: vault});
      }, {})
      console.log('REDUCED VAULTS:', reducedVaults);
      return {
        ...state,
        fetching: false,
        fetched: true,
        vaults: reducedVaults
      }
    case CREATE_VAULT:
      return {
        ...state,
        vaults: {
          ...state.vaults,
          [action.vault._id]: {
            name: action.vault.name,
            url: action.vault.url,
            description: action.vault.description,
            _id: action.vault._id,
            crypts: action.vault.crypts
          }
        }
      }
    case CREATE_VAULT_FAIL:
      return state;
    default:
      return state;
  }
}
