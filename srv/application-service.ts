import cds from "@sap/cds";

import {Application} from "#cds-models/ApplicationService/index.js"

const log = cds.log('ApplicationService', { label: 'ApplicationService' })

export default class ApplicationService extends cds.ApplicationService {
  async init(): Promise<void> {
    log.info(Application)
    await super.init()
  }
}
