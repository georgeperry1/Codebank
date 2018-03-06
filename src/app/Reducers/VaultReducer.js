'use strict'

import {
  REQUEST_VAULTS,
  RECEIVE_VAULTS,
  RECEIVE_VAULTS_FAIL,
  CREATE_VAULT,
  CREATE_VAULT_SUCCESS,
  CREATE_VAULT_FAIL
} from '../Actions/VaultActions';

import {
  CREATE_CRYPT,
  CREATE_CRYPT_SUCCESS,
  CREATE_CRYPT_FAIL
} from '../Actions/CryptActions';

import {
  CREATE_GEM,
  CREATE_GEM_SUCCESS,
  CREATE_GEM_FAIL
} from '../Actions/GemActions';

const defaultState = {
  fetching: false,
  fetched: false,
  vaults: {},
  gems: []
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
      return {
        ...state,
        fetching: false,
        fetched: true,
        vaults: reducedVaults,
      }
    case CREATE_VAULT_SUCCESS:
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
    case CREATE_CRYPT_SUCCESS:
      return {
        ...state,
        vaults: {
          ...state.vaults,
          [action.crypt.parentVault]: {
            ...state.vaults[action.crypt.parentVault],
            crypts: [
              ...state.vaults[action.crypt.parentVault].crypts,
            action.crypt._id
            ]
          }
        }
      }
    case CREATE_CRYPT_FAIL:
        return state;
    case CREATE_GEM_SUCCESS:
      console.log('GEM IN REDUCER:', action.gem);
      return {
        ...state,
          gems: [
            ...state.gems,
            action.gem
          ]
        }
    case CREATE_GEM_FAIL:
      return state;
    default:
      return state;
  }
}
