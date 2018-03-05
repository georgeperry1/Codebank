'use strict'

import {
  CREATE_CRYPT,
  CREATE_CRYPT_FAIL
} from '../Actions/CryptActions';

const defaultState = {
  vaults: {},
  crypts: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_CRYPT:
    // action
    // {
    //   type: 'CREATE_CRYPT',
    //   crypt: {
    //     _id: "345",
    //     name: "asdf",
    //     parentVault: "123",
    //   }
    // }
      return {
        ...state,
        vaults: {
          ...state.vaults,
          [action.crypt.parentVault]: {
            ...state.vaults[action.crypt.parentVault],
            crypts: [
              ...state.vaults[action.crypt.parentVault].crypts,
              action.crypt._id
            ]
          }
        },
        crypt: {
          ...state.crypts,
          [state.crypt._id]: action.crypt
        }
      }
      //ADD CODE
    case CREATE_CRYPT_FAIL:
      //ADD CODE
    default:
      return state;
  }
}
