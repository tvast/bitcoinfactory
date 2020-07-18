import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Account, AccountRelations, User} from '../models';
import {Btf4DataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.id,
  AccountRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Account.prototype.id>;

  constructor(
    @inject('datasources.btf4') dataSource: Btf4DataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Account, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
