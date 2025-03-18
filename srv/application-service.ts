import cds from "@sap/cds";

// TODO switch here
// import {testFunction, testFunction2} from "#cds-models/ApplicationService"
import {testFunction, testFunction2} from "#cds-models/ApplicationService/index.js"


export default class ApplicationService extends cds.ApplicationService {
  async init(): Promise<void> {
    console.log(testFunction, testFunction2)
    this.on(testFunction, this.onTestFunction)
    this.on(testFunction2, this.onTestFunction2)
    await super.init()
  }

  async onTestFunction(): Promise<boolean> {
    return true
  }

  async onTestFunction2(): Promise<string> {
    return 'wop'
  }
}
