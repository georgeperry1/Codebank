'use strict';

const defaultState = {
  vaults: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_VAULTS':
    //console.log('ACTION:', action);
      return {
        ...state,
        vaults: action.vaults
      }
    case 'CREATE_VAULT':
      console.log('CREATE ACTION:', action);
      return {
        ...state,
        vaults: [
          ...state.vaults,
          {
            name: action.vault.name,
            url: action.vault.url,
            description: action.vault.description,
            id: action.vault._id,
            crypts: action.vault.crypts
          },
        ]
      }
    case 'CREATE_VAULT_FAIL':
      return {
        ...state,
        vaults: state.vaults
          .filter(vault => vault.name !== action.vault)
      }
    default:
      return state;
  }
}
