import {Entity, model, property, hasMany} from '@loopback/repository';
import {Account} from './account.model';

@model()
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
  user_name?: string;

  @property({
    type: 'string',
  })
  user_mail?: string;

  @property({
    type: 'number',
  })
  user_age?: number;

  @hasMany(() => Account, {keyTo: 'id'})
  accounts: Account[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
