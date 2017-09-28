var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-escape');

describe('next/escape', function () {

  it("nx.escape('fred, barney, & pebbles');", function () {
    var res = nx.escape('fred, barney, & pebbles');
    var expect = 'fred, barney, &amp; pebbles';

    assert.equal(res, expect);
  });

});
