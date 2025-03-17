import {afterEach, beforeEach, describe, it, jest} from '@jest/globals'
import {expect, use} from 'chai'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'

use(sinonChai)

const actualDepModule = await import('#root/srv/dep.js')
const dep = sinon.stub()
jest.unstable_mockModule('#root/srv/dep.js', () => ({
  ...actualDepModule,
  dep
}))

const {example} = await import('#root/srv/example.js')

describe('module', () => {
  beforeEach(() => {
    dep.callsFake(() => actualDepModule.dep())
  })

  afterEach(() => {
    sinon.reset()
  })

  afterAll(() => {
    sinon.restore()
  })

  it('import mock', async () => {
    dep.returns(1)
    expect(example()).to.equal(1)
  })

  it('import mock 2', async () => {
    dep.returns(2)
    expect(example()).to.equal(2)
  })

  it('import mock 3', async () => {
    expect(example()).to.equal(42)
  })
})
