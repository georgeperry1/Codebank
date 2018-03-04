'use strict';

import {
  REQUEST_VAULTS,
  RECEIVE_VAULTS,
  RECEIVE_VAULTS_FAIL
} from '../Actions/VaultActions';

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
        fetched: false
      }
    case RECEIVE_VAULTS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        vaults: action.vaults
      }
    // case 'CREATE_VAULT':
    //   //console.log('CREATE ACTION:', action);
    //   return {
    //     ...state,
    //     vaults: {
    //       ...state.vaults,
    //       [action.vault._id]: {
    //         name: action.vault.name,
    //         url: action.vault.url,
    //         description: action.vault.description,
    //         id: action.vault._id,
    //         crypts: action.vault.crypts
    //       },
    //     }
    //   }
    // case 'CREATE_VAULT_FAIL':
    //   return {
    //     ...state,
    //     vaults: state.vaults
    //       .filter(vault => vault.name !== action.vault)
    //   }
    default:
      return state;
  }
}
