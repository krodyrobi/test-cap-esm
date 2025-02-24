using { custom.namespace.db as my } from '../db/schema';

service ApplicationService {
  entity Application as projection on my.Applications;
}