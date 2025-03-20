import cds from "@sap/cds";

import {Applications} from "#cds-models/ApplicationService/index.js"

export default class ApplicationService extends cds.ApplicationService {
  async init(): Promise<void> {
    this.on('READ', Applications, this.onRead)

    await super.init()
  }

  async onRead(): Promise<Applications> {
    console.dir(Applications)
    console.dir(Applications)
    return SELECT.from(Applications)
  }
}
