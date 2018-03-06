import { createStore, combineReducers } from 'redux';
import vaultReducer from './VaultReducer';
import showVaultReducer from './ShowVaultReducer';
import showCryptReducer from './ShowCryptReducer';

export default combineReducers({
  vaultReducer,
  showVaultReducer,
  showCryptReducer
})
