'use strict'

//1: requestVaults Action Function
export const REQUEST_VAULTS = 'REQUEST_VAULTS'
export const requestVaults = (vaults) => {
  return {
    type: REQUEST_VAULTS,
    vaults: vaults,
    meta: {
      params: '/vaults',
      method: 'GET'
    }
  }
}
//2: receiveVaults Action Function
export const RECEIVE_VAULTS = 'RECEIVE_VAULTS'
export const receiveVaults = (vaults) => {
  return {
    type: RECEIVE_VAULTS,
    vaults: vaults
  }
}
//3: failedFetchVaults Action Function
export const RECEIVE_VAULTS_FAIL = 'REQUEST_VAULTS_FAIL'
export const failedFetchVaults = (vaults) => {
  return {
    type: RECEIVE_VAULTS_FAIL,
    vaults: vaults
  }
}

//Create Vault
export const CREATE_VAULT = 'CREATE_VAULT';
export const createVaultAction = (vault) => ({
  type: CREATE_VAULT,
  vault: vault,
  meta: {
    params: '/vaults/create',
    method: 'POST'
  }
});

//Create Vault Fail
export const CREATE_VAULT_FAIL = 'CREATE_VAULT_FAIL';
export const createVaultFailAction = (vault) => ({
  type: CREATE_VAULT_FAIL,
  vault: vault
});

//Show a vault that the user has clicked on
export const SHOW_VAULT = 'SHOW_VAULT';
export const showVaultAction = (vaultId) => {
  console.log('Action dispatched');
  return {
    type: SHOW_VAULT,
    vaultId: vaultId,
    meta: {
      params: `/vault/${vaultId}`,
      method: 'GET'
    }
  }
};

//If SHOW_VAULT request is successfull
export const SHOW_VAULT_SUCCESS = 'SHOW_VAULT_SUCCESS'
export const showVaultSuccessAction = (vault) => {
  return {
    type: SHOW_VAULT_SUCCESS,
    vault: vault
  }
}

//If SHOW_VAULT request is a failure
export const SHOW_VAULT_FAIL = 'SHOW_VAULT_FAIL'
export const showVaultFailAction = (vault) => {
  return {
    type: SHOW_VAULT_FAIL,
    vault: vault
  }
}
