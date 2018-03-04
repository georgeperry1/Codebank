import { createStore, combineReducers } from 'redux';
import vaultReducer from './VaultReducer';
import showVaultReducer from './ShowVaultReducer';

export default combineReducers({
  vaultReducer,
  showVaultReducer
})
