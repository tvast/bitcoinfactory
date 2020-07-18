import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User, UserWithRelations } from './user.model';

@model({ settings: { strict: false } })
export class Account extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'number',
  })
  sold?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  userID?: number;

  @property({
    type: 'array',
    itemType: 'object',
  })
  transaction?: object[];

  @belongsTo(() => User)
  userId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
  accounts?: UserWithRelations[]
}

export type AccountWithRelations = Account & AccountRelations;
