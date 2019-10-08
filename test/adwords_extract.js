var expect = require('chai').expect
var rewire = require('rewire')
var TMSHelperModule = rewire('../src/tmshelper.js')
describe('Adwords Extract', function () {
  global.TMSHelper = TMSHelperModule.__get__('TMSHelper')
  // set same datalayer for all tests
  // imitate that this is a dataLayer state at the time of executing the code
  var dataLayer = {
    'ut.event': 'view'
  }
  
  // pretend that location object contains this data
  var location = {
    search: '?gclid=GSkwmasudkjmer'
  }

  global.b =  dataLayer
  global.utag_data =  dataLayer
  global.location =  location
  global.console = console
  
  it('correctly extracts the value of gclid parameter into data layer variable `toolAdw_vt_string`', function () {
    var AdwordsExtractModule = rewire('../src/adwords_extract.js')
    expect(b['toolAdw_vt_string']).to.equal('GSkwmasudkjmer')
  })
})
