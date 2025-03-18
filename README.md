# Getting Started

```
npm install
npm run gen:types
```

## Change test case in application-service.ts

```
import {testFunction, testFunction2} from "#cds-models/ApplicationService"          # case 1
import {testFunction, testFunction2} from "#cds-models/ApplicationService/index.js" # case 2
```

```shell
// watching
cds watch

//compilation
cds build --production; cd gen/srv; npm install; npm start;

```

| Case # | compilation                                      | watching                                                                   |
|--------|--------------------------------------------------|----------------------------------------------------------------------------|
| 1      | `is not supported resolving ES modules imported` | ok                                                                         |
| 2      | ok                                               | fails testFunction2() executes onTestFunction() exported name is undefined |


```
@cap-js/asyncapi: 1.0.2
@cap-js/cds-typer: 0.33.1
@cap-js/cds-types: 0.9.0
@cap-js/db-service: 1.17.2
@cap-js/openapi: 1.1.2
@cap-js/sqlite: 1.8.0
@sap/cds: 8.7.2
@sap/cds-compiler: 5.7.4
@sap/cds-dk (global): 8.7.3
@sap/cds-fiori: 1.3.0
@sap/cds-foss: 5.0.1
@sap/cds-mtxs: 2.5.1
@sap/eslint-plugin-cds: 3.1.2
Node.js: v20.16.0
home: test-cap/node_modules/@sap/cds
test-cap: 1.0.0
```