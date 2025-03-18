using { custom.namespace.db as my } from '../db/schema';

service ApplicationService {
  entity Application as projection on my.Applications;

  function testFunction() returns Boolean not null;
  function testFunction2() returns String not null;
}