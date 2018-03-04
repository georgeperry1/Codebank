'use strict'

import { normalize, schema } from 'normalizr';
// import * as VaultActions from '../Actions/VaultActions';
import {
  REQUEST_VAULTS,
  RECEIVE_VAULTS,
  RECEIVE_VAULTS_FAIL,
  CREATE_VAULT,
  CREATE_VAULT_FAIL
} from '../Actions/VaultActions';

const API_ROOT = 'http://localhost:3000';

export const apiService = store => next => action => {
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
