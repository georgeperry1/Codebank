'use strict'

import {
  REQUEST_VAULTS,
  RECEIVE_VAULTS,
  RECEIVE_VAULTS_FAIL,
  CREATE_VAULT,
  CREATE_VAULT_FAIL,
  SHOW_VAULT,
  SHOW_VAULT_SUCCESS,
  SHOW_VAULT_FAIL
} from '../Actions/VaultActions';

const API_ROOT = 'http://localhost:3000';

export const apiService = store => next => action => {
  //Populate Vaults
  if (action.type === REQUEST_VAULTS) {
    fetch(API_ROOT + action.meta.params)
    .then(response => response.json())
    .then(fetchedVaults => {
      if (fetchedVaults) {
        let newAction = {
          ...action,
          type: RECEIVE_VAULTS,
          vaults: fetchedVaults
        }
        store.dispatch(newAction);
      } else {
        let newAction = {
          ...action,
          type: RECEIVE_VAULTS_FAIL
        }
        store.dispatch(newAction);
      }
    })
  }
  //Create a new Vault
  if (action.type === CREATE_VAULT) {
    fetch(API_ROOT + action.meta.params, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.vault)
    })
    .then(response => {
      if (response.status === 404) {
        let newAction = {
          ...action,
          type: CREATE_VAULT_FAIL,
          vault: action.vault
        }
        store.dispatch(newAction);
      } else {
        let newAction = {
          ...action,
          type: CREATE_VAULT,
          vault: action.vault
        }
      }
    })
  }
  //Show a specified Vault that a user clicks on
  if (action.type === SHOW_VAULT) {
    console.log('Made it to API Service');
    fetch(API_ROOT + action.meta.params)
    .then(response => response.json())
    .then(fetchedVault => {
      if (fetchedVault) {
        let newAction = {
          ...action,
          type: SHOW_VAULT_SUCCESS,
          vault: fetchedVault
        }
        store.dispatch(newAction);
      } else {
        let newAction = {
          ...action,
          type: SHOW_VAULT_FAIL
        }
        store.dispatch(newAction);
      }
    })
  }
  return next(action)
}

// const callApi = action => {
//   let apiData;
//   if (action.meta.method === 'GET') {
//     fetch(API_ROOT + action.meta.params, {
//       method: 'GET'
//     })
//     .then(response => response.json())
//     .then(fetchedData => {
//       apiData = fetchedData;
//     });
//   }
//
//   if (action.meta.method === 'POST') {
//     fetch(API_ROOT + action.meta.params, {
//       method: 'POST',
//       header: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(action.vault)
//     })
//     .then(response => response.status)
//   }
//   return apiData;
// }
