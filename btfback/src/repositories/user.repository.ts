import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Account} from '../models';
import {Btf4DataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AccountRepository} from './account.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly accounts: HasManyRepositoryFactory<Account, typeof User.prototype.id>;

  constructor(
    @inject('datasources.btf4') dataSource: Btf4DataSource, @repository.getter('AccountRepository') protected accountRepositoryGetter: Getter<AccountRepository>,
  ) {
    super(User, dataSource);
    this.accounts = this.createHasManyRepositoryFactoryFor('accounts', accountRepositoryGetter,);
    this.registerInclusionResolver('accounts', this.accounts.inclusionResolver);
  }
}
