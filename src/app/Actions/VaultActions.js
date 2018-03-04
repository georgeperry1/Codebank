export const ADD_VAULTS = 'ADD_VAULTS';
export const addVaultsAction = (vaults) => ({
  type: ADD_VAULTS,
  vaults,
});

export const CREATE_VAULT = 'CREATE_VAULT';
export const createVaultAction = (vault) => ({
  type: CREATE_VAULT,
  vault,
});

export const CREATE_VAULT_FAIL = 'CREATE_VAULT_FAIL';
export const createVaultFailAction = (vault) => ({
  type: CREATE_VAULT_FAIL,
  vault,
});

export const SHOW_VAULT = 'SHOW_VAULT';
export const showVaultAction = (vault) => ({
  type: SHOW_VAULT,
  vault,
});
