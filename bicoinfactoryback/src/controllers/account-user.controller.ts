import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Account,
  User,
} from '../models';
import {AccountRepository} from '../repositories';

export class AccountUserController {
  constructor(
    @repository(AccountRepository)
    public accountRepository: AccountRepository,
  ) { }

  @get('/accounts/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Account',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof Account.prototype.acount_id,
  ): Promise<User> {
    return this.accountRepository.user(id);
  }
}
