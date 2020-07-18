import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Account} from '../models';
import {BitcoinsafeDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AccountRepository} from './account.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly accounts: HasManyRepositoryFactory<Account, typeof User.prototype.id>;

  constructor(
    @inject('datasources.bitcoinsafe') dataSource: BitcoinsafeDataSource, @repository.getter('AccountRepository') protected accountRepositoryGetter: Getter<AccountRepository>,
  ) {
    super(User, dataSource);
    this.accounts = this.createHasManyRepositoryFactoryFor('accounts', accountRepositoryGetter,);
    this.registerInclusionResolver('accounts', this.accounts.inclusionResolver);
  }
}
