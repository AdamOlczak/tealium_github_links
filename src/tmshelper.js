var TMSHelper = {
  toLower: function (input) {
    return input.toLowerCase()
  },
  toUpper: function (input) {
    return input.toUpperCase()
  },
  getParameterByName: function (name, str) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
    var s = str || location.search
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
    var results = regex.exec(s)
    return results == null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '))
  }
}
