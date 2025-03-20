using { custom.namespace.db as my } from '../db/schema';

service ApplicationService {
  entity Applications as projection on my.Applications;
}