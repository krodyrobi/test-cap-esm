# Getting Started

```
npm install
npm run gen:types

# works
npm run watch

# fails
cds build --production; cd gen/srv; npm install; npm start

# GET http://localhost:4004/odata/v4/application/Applications
# {"error":{"code":"500","message":"Property raw does not exist on entity 'ApplicationService.Applications' or cds.entities is not yet defined. Ensure the CDS runtime is fully booted before accessing properties."}}
```

```
@cap-js/asyncapi: 1.0.2
@cap-js/cds-typer: 0.33.1
@cap-js/cds-types: 0.9.0
@cap-js/db-service: 1.17.2
@cap-js/openapi: 1.1.2
@cap-js/sqlite: 1.8.0
@sap/cds: 8.8.2
@sap/cds-compiler: 5.7.4
@sap/cds-dk (global): 8.7.3
@sap/cds-fiori: 1.3.0
@sap/cds-foss: 5.0.1
@sap/cds-mtxs: 2.5.1
@sap/eslint-plugin-cds: 3.1.2
Node.js: v20.16.0
```