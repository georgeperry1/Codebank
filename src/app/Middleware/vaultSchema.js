'use strict'

import { normalize, schema } from 'normalizr';

const gemSchema = new schema.Entity('gems');
const cryptSchema = new schema.Entity('crypts', {
  gems: [ gemSchema ]
});
const vaultSchema = new schema.Entity('vaults', {
  crypts: [ cryptSchema ]
});

export { gemSchema, cryptSchema, vaultSchema};
