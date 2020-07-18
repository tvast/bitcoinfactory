import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'bitcoinsafe',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: 'theomaster',
  password: 'admin',
  database: 'bitcoinsafe',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BitcoinsafeDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'bitcoinsafe';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.bitcoinsafe', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
