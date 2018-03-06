'use strict'

//1: Create Gem
export const CREATE_GEM = 'CREATE_GEM';
export const createGemAction = (gem) => ({
  type: CREATE_GEM,
  gem: gem,
  meta: {
    params: `/vault/${gem.parentVault}/${gem.parentCrypt}/create`,
    method: 'POST'
  }
});

//2: Create Gem Success
export const CREATE_GEM_SUCCESS = 'CREATE_GEM_SUCCESS';
export const createGemSuccessAction = (gem) => ({
  type: CREATE_GEM_SUCCESS,
  gem: gem
});

//3: Create Gem Fail
export const CREATE_GEM_FAIL = 'CREATE_GEM_FAIL';
export const createGemFailAction = (gem) => ({
  type: CREATE_GEM_FAIL,
  gem: gem
});
