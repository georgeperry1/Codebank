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

//4: Create Vault
export const CREATE_VAULT = 'CREATE_VAULT';
export const createVaultAction = (vault) => ({
  type: CREATE_VAULT,
  vault: vault,
  meta: {
    params: '/vaults/create',
    method: 'POST'
  }
});

//5: Create Vault Fail
export const CREATE_VAULT_FAIL = 'CREATE_VAULT_FAIL';
export const createVaultFailAction = (vault) => ({
  type: CREATE_VAULT_FAIL,
  vault: vault
});

//6: Pass a specific ID to store
export const PASS_VAULT_ID = 'PASS_VAULT_ID';
export const passVaultIdAction = (passedId) => {
  return {
    type: PASS_VAULT_ID,
    passedId: passedId
  }
}

//7: Show a vault that the user has clicked on
export const SHOW_VAULT = 'SHOW_VAULT';
export const showVaultAction = (vaultId) => {
  return {
    type: SHOW_VAULT,
    vaultId: vaultId,
    meta: {
      params: `/vault/${vaultId}`,
      method: 'GET'
    }
  }
};

//8: If SHOW_VAULT request is successfull
export const SHOW_VAULT_SUCCESS = 'SHOW_VAULT_SUCCESS'
export const showVaultSuccessAction = (vault) => {
  return {
    type: SHOW_VAULT_SUCCESS,
    vault: vault
  }
}

//9: If SHOW_VAULT request is a failure
export const SHOW_VAULT_FAIL = 'SHOW_VAULT_FAIL'
export const showVaultFailAction = (vault) => {
  return {
    type: SHOW_VAULT_FAIL,
    vault: vault
  }
}
