var expect = require('chai').expect
var rewire = require('rewire')
var TMSHelperModule = rewire('../src/tmshelper.js')
describe('TMSHelper', function () {
  var TMSHelper = TMSHelperModule.__get__('TMSHelper')
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
  describe('#getParameterByName()', function () {
    var revert = TMSHelperModule.__set__({
      location: {
        search: '?foo=bar'
      }
    })
    this.afterAll(function () {
      revert()
    })

    it("should return empty string when the passed parameter string doesn't start with ? or &", function () {
      expect(TMSHelper.getParameterByName('foo', 'foo=bar')).to.be.empty
    })

    it('should return empty string when the parameter is not existing in the location.search', function () {
      expect(TMSHelper.getParameterByName('notexisting')).to.be.empty
    })
    it('should return the value of parameter when it is existing in the location.search', function () {
      expect(TMSHelper.getParameterByName('foo')).to.equal('bar')
    })

    it("should return empty string when passed string doesn't contain parameter", function () {
      expect(TMSHelper.getParameterByName('notexisting', '?foo=barro')).to.be.empty
    })
    it("should return a parameter value when it is existing in passed string", function () {
      expect(TMSHelper.getParameterByName('foo', '?foo=barro')).to.equal('barro')
    })
  })
})
