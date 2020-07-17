import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'bitcoinvault',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: 'theomaster',
  password: '376898Dead2702',
  database: 'bitcoinvault',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BitcoinvaultDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'bitcoinvault';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.bitcoinvault', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
