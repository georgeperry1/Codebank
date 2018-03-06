import { createStore, combineReducers } from 'redux';
import vaultReducer from './VaultReducer';
import showVaultReducer from './ShowVaultReducer';
// import cryptReducer from './CryptReducer';

export default combineReducers({
  vaultReducer,
  showVaultReducer,
  // cryptReducer
})
