(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var EMPTY_STR = '';
  // List of HTML entities for escaping.
  var HTML_ESCAPES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };

  // Regex containing the keys listed immediately above.
  var HTML_ESCAPER = /[&<>"'\/]/g;

  // Escape a string for HTML interpolation.
  nx.escape = function(inString) {
    return (EMPTY_STR + inString).replace(HTML_ESCAPER, function(match) {
      return HTML_ESCAPES[match];
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.escape;
  }

}());
