//define(['chai', './first.js'], function(chai, TMSHelper) {
	var expect = require('chai').expect;
	var TMSHelper = require('../src/first.js');
	describe('TMSHelper', function() {
		describe('#toUpper()', function () {
			it('should conver strings to lowercase correctlly', function () {
				var str = TMSHelper.toLower('TEST');
				expect(str).to.equal('test');
			});
		});
		describe('#toUpper()', function () {
			it('should convert strings to uppercase correctly', function () {
				expect(TMSHelper.toUpper('lorem ipsum')).to.equal('LOREM IPSUM');
			});
		});
	});
//});
