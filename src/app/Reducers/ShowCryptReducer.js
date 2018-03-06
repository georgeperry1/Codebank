'use strict'

import {
  SHOW_CRYPT,
  SHOW_CRYPT_SUCCESS,
  SHOW_CRYPT_FAIL
} from '../Actions/CryptActions';

const defaultState = {
  fetching: false,
  fetched: false,
  selectedCrypt: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_CRYPT:
      return {
        ...state,
        fetching: true
      }
    case SHOW_CRYPT_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      selectedCrypt: action.crypt
    }
    case SHOW_CRYPT_FAIL:
      return {
        ...state,
        fetching: false,
        fetching: false
      }
    default:
      return state;
  }
}
