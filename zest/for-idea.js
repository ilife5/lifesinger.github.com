var S = KISSY,
    noop = function() {
    };

window.console = {
    log: noop,
    warn: noop,
    info: noop,
    dir: noop
};

// Boolean Number String Function Array Date RegExp Object
S = {
    isBoolean: noop,
    isNumber: noop,
    isString: noop,
    isFunction: noop,
    isArray: noop,
    isDate: noop,
    isRegExp: noop,
    isObject: noop
};

S.UA = {
    ie: 0,
    gecko: 0,
    webkit: 0
};

S.DOM = {
    viewportWidth: noop,
    viewportHeight: noop,
    docHeight: noop,
    docWidth: noop
};

S.Node = {
    appendTo: noop,
    append: noop,
    prepend: noop,
    prependTo: noop
};


// for node.js
var process = {
  argv: [],
  exit: function(){},
  cwd: function(){},
  stdout: {}
};

var require, exports, module;

var fs = {
  readFileSync: function(){},
  writeFileSync: function(){},
  mkdirSync: function(){},
  rmdirSync: function(){},
  statSync: function(){},
  readdir: function(){},
  readdirSync: function(){},
  unlinkSync: function(){}
};

fs.Stats = {
  isFile: function(){},
  isDirectory: function(){}
};

var __filename, __dirname;

var path = {
  basename: function(){},
  extname: function(){},
  existsSync: function() {},
  join: function() {}
};

var vm = {
  runInThisContext: function(){},
  runInNewContext: function(){}
};

var jsdom = {
  jsdom: function(){}
};

document.createWindow = function() {};
