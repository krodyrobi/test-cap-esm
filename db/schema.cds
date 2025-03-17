namespace custom.namespace.db;

using { cuid } from '@sap/cds/common';

aspect ScanInfo {
  lastScan : Timestamp;
}

entity Applications : cuid, ScanInfo {
  name: String
}