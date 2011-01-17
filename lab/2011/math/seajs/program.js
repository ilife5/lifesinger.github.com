module.declare(['increment'], function(require) {
  var inc = require('increment').increment;
  document.body.innerHTML = inc(1);
});
