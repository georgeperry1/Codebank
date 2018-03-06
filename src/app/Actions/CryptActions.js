'use strict'

//1: Create Crypt
export const CREATE_CRYPT = 'CREATE_CRYPT';
export const createCryptAction = (crypt) => ({
  type: CREATE_CRYPT,
  crypt: crypt,
  meta: {
    params: `/vault/${crypt.parentVault}/create`,
    method: 'POST'
  }
});

//2: Create Crypt Success
export const CREATE_CRYPT_SUCCESS = 'CREATE_CRYPT_SUCCESS';
export const createCryptSuccessAction = (crypt) => ({
  type: CREATE_CRYPT_SUCCESS,
  crypt: crypt
});

//3: Create Crypt Fail
export const CREATE_CRYPT_FAIL = 'CREATE_CRYPT_FAIL';
export const createCryptFailAction = (crypt) => ({
  type: CREATE_CRYPT_FAIL,
  crypt: crypt
});

//4: Show a vault that the user has clicked on
export const SHOW_CRYPT = 'SHOW_CRYPT';
export const showCryptAction = (cryptInfo) => {
  return {
    type: SHOW_CRYPT,
    cryptInfo: cryptInfo,
    meta: {
      params: `/vault/${cryptInfo.parentVault}/${cryptInfo.cryptId}`,
      method: 'GET'
    }
  }
};

//5: If SHOW_CRYPT request is successfull
export const SHOW_CRYPT_SUCCESS = 'SHOW_CRYPT_SUCCESS'
export const showCryptSuccessAction = (crypt) => {
  return {
    type: SHOW_CRYPT_SUCCESS,
    crypt: crypt
  }
}

//6: If SHOW_CRYPT request is a failure
export const SHOW_CRYPT_FAIL = 'SHOW_CRYPT_FAIL'
export const showCryptFailAction = (crypt) => {
  return {
    type: SHOW_CRYPT_FAIL,
    crypt: crypt
  }
}
