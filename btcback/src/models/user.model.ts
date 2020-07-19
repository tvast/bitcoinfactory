import {Entity, model, property, hasMany} from '@loopback/repository';
import {Account} from './account.model';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  acount?: object[];

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  age?: string;

  @hasMany(() => Account)
  accounts: Account[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
