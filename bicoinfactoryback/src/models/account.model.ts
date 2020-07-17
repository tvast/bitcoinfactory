import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Account extends Entity {
  @property({
    type: 'number',
  })
  user_solde?: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  acount_id?: number;

  @property({
    type: 'string',
  })
  account_name?: string;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
