var expect = require('chai').expect
var rewire = require('rewire')
var firstModule = rewire('../src/first.js')
describe('TMSHelper', function () {
  var TMSHelper = firstModule.__get__('TMSHelper')
  describe('#toUpper()', function () {
    it('should conver strings to lowercase correctlly', function () {
      var str = TMSHelper.toLower('TEST')
      expect(str).to.equal('test')
    })
  })
  describe('#toUpper()', function () {
    it('should convert strings to uppercase correctly', function () {
      expect(TMSHelper.toUpper('lorem ipsum')).to.equal('LOREM IPSUM')
    })
  })
})
