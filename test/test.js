var assert = require('assert');
var utils = require('../src/lib/utils');

describe('utils', function () {
  describe('shadeColor', function () {
    it('should lighten a colour by 10%', function () {
      assert.equal(utils.shadeColor('#888888', 10), '#a2a2a2');
    });
    it('should darken a colour by 10%', function () {
      assert.equal(utils.shadeColor('#888888', -10), '#6f6f6f');
    });
    it('should stop at #000000 and #FFFFFF', function () {
      assert.equal(utils.shadeColor('#000000', -50), '#000000');
      assert.equal(utils.shadeColor('#ffffff', 50), '#ffffff');
    });
  });

});
