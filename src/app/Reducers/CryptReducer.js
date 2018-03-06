// 'use strict'
//
// import {
//   CREATE_CRYPT,
//   CREATE_CRYPT_FAIL
// } from '../Actions/CryptActions';
// 
// const defaultState = {
//   vaults: {},
//   crypts: {}
// }
//
// // Incoming Action:
// // {
// //   type: 'CREATE_CRYPT',
// //   crypt: {
// //     _id: "345",
// //     name: "asdf",
// //     parentVault: "123",
// //   }
// // }
//
// export default (state = defaultState, action) => {
//   switch (action.type) {
//     case CREATE_CRYPT:
//       console.log('ACTION:', action.crypt);
//       console.log('STATE:', state.vaults);
//       return {
//         ...state,
//         vaults: {
//           ...state.vaults,
//           [action.crypt.parentVault]: {
//             ...state.vaults[action.crypt.parentVault],
//             crypts: [
//               ...state.vaults[action.crypt.parentVault].crypts,
//               action.crypt._id
//             ]
//           }
//         },
//         // crypts: {
//         //   ...state.crypts,
//         //   [state.crypt._id]: action.crypt
//         // }
//       }
//     case CREATE_CRYPT_FAIL:
//       return state;
//     default:
//       return state;
//   }
// }
