import {Entity, model, property, hasMany} from '@loopback/repository';
import {Account} from './account.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
  })
  user_name?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  user_id?: number;

  @property({
    type: 'string',
  })
  user_email?: string;

  @property({
    type: 'number',
  })
  user_age?: number;

  @hasMany(() => Account)
  accounts: Account[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
