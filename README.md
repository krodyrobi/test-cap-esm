# Getting Started

```
npm install
npm run gen:types

# works
npm run watch
npm run test:unit

# fails
npm run test
# Must use import to load ES Module: <...>/srv/application-service.ts

# having custom server.ts does not change behaviour
# even though running with jest the cds.utils._import doesn't seem to correctly detect JEST_WORKER_ID in @sap/cds/lib/cds-utils.js+290
```

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