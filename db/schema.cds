namespace custom.namespace.db;

using { cuid } from '@sap/cds/common';

entity Applications : cuid {
  name: String
}

@assert.range: true
type CustomType : String enum {
  type1;
  type2;
}