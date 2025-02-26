import cds from "@sap/cds";

// import {Application} from "#cds-models/custom/namespace/db/index.js"
// import {Application, CustomType} from "#cds-models/custom/namespace/db/index.js"

/*
cds build --production
cd gen/srv
npm run start

import { CustomType } from "#cds-models/custom/namespace/db/index.js"
SyntaxError: The requested module '#cds-models/custom/namespace/db/index.js' does not provide an export named 'CustomType'
*/

const log = cds.log('ApplicationService', { label: 'ApplicationService' })

export default class ApplicationService extends cds.ApplicationService {
  async init(): Promise<void> {
    await super.init()
    // log.info(Application)
    // log.info(CustomType.type1)
  }
}
