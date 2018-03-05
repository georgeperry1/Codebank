'use strict'

import {
  CREATE_CRYPT,
  CREATE_CRYPT_FAIL
} from '../Actions/CryptActions';

const defaultState = {
  vaults: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_CRYPT:
      //ADD CODE
    case CREATE_CRYPT_FAIL:
      //ADD CODE
    default:
      return state;
  }
}
