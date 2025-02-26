import cds from '@sap/cds'
import cov2ap from '@cap-js-community/odata-v2-adapter'

import packageJson from '../package.json' with {type: 'json'}

console.log(typeof cov2ap)
cds.on('bootstrap', app => {
  // TODO odata-v2-adapter: TS no call signature
  app.use(cov2ap())

  console.log(packageJson)
})

export default cds.server
