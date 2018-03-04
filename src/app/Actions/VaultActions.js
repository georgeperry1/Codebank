//1: requestVaults Action Function
export const REQUEST_VAULTS = 'REQUEST_VAULTS'
export const requestVaults = (vaults) => {
  return {
    type: REQUEST_VAULTS,
    vaults: vaults,
    meta: {
      params: '/vaults'
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
//4: Combine all FetchVaults Action Functions
// export const addVaultsAction = (vaults) => {
//   return (dispatch) => {
//     dispatch(requestVaults(vaults))
//     fetch('http://localhost:3000/vaults', {
//       method: 'GET'
//     })
//     .then(response => {
//       return response.json()
//       error => console.log('ERROR IN addVaultsAction', error);
//     })
//     .then(vaults => {
//       console.log('RESPONSE FROM FETCH:', vaults);
//       dispatch(receiveVaults(vaults))
//     })
//   }
// }


//FOR LATER

//Create Vault
export const CREATE_VAULT = 'CREATE_VAULT';
export const createVaultAction = (vault) => ({
  type: CREATE_VAULT,
  vault,
});

//Create Vault Fail
export const CREATE_VAULT_FAIL = 'CREATE_VAULT_FAIL';
export const createVaultFailAction = (vault) => ({
  type: CREATE_VAULT_FAIL,
  vault,
});

//Show a vault that the user has clicked on
export const SHOW_VAULT = 'SHOW_VAULT';
export const showVaultAction = (vault) => ({
  type: SHOW_VAULT,
  vault,
});
