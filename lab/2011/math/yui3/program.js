YUI.add('program', function(Y) {
  document.body.innerHTML = Y.increment(1);
}, '1.0', { requires: ['increment'] });
