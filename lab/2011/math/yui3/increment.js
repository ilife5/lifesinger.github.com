YUI.add('increment', function(Y) {
  var Math = Y.Math;
  Y.increment = function (val) { return Math.add(val, 1); }
}, '1.0', { requires: ['math'] });
