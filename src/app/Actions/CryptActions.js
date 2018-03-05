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

//2: Create Crypt Fail
export const CREATE_CRYPT_FAIL = 'CREATE_CRYPT_FAIL';
export const createCryptFailAction = (crypt) => ({
  type: CREATE_CRYPT_FAIL,
  crypt: crypt
});