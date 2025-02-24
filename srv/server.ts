import cds from '@sap/cds'
import cov2ap from '@cap-js-community/odata-v2-adapter'

cds.on('bootstrap', app => {
  // @ts-ignore
  // TODO odata-v2-adapter: TS no call signature
  app.use(cov2ap())
})

export default cds.server
