import cds from '@sap/cds'

describe('Application Service', () => {
  const URL = '/odata/v4/application/'
  const { GET, expect } = cds.test('serve', 'ApplicationService')

  it('should return []', async () => {
    await expect(GET(URL)).to.eventually.equal({"@odata.context":"$metadata#Application","value":[]})
  })
})
