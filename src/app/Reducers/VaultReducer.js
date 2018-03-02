'use strict';

import * as VaultActions from '../Actions/VaultActions';

const defaultState = {
  vaults: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case VaultActions.ADD_VAULTS:
      return {
        ...state,
        vaults: action.vaults
      }
    case VaultActions.CREATE_VAULT:
      console.log('ACTION:', action);
      return {
        ...state,
        vaults: [
          ...state.vaults,
          {
            name: action.vault.name,
            url: action.vault.url,
            description: action.vault.description,
            id: action.vault.id,
            crypts: action.vault.crypts
          },
        ]
      }
    case VaultActions.CREATE_VAULT_FAIL:
      return {
        ...state,
        vaults: state.vaults
          .filter(vault => vault.name !== action.vault)
      }
    default:
      console.log('DEFAULT');
      return state;
  }
}
