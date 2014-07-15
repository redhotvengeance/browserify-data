var through = require('through');
var cson = require('cson');
var yaml = require('js-yaml');

module.exports = function(file) {
  if (!/\.cson|\.json|\.ya?ml$/.test(file)) {
    return through();
  }

  var data = '';

  function write(buf) {
    data += buf;
  }

  function end() {
    if (/\.json$/.test(file)) {
      this.queue('module.exports = ' + data);
      this.queue(null);
    }
    else if (/\.cson$/.test(file)) {
      this.queue('module.exports = ' + JSON.stringify(cson.parseSync(data)));
      this.queue(null);
    }
    else if (/\.ya?ml$/.test(file)) {
      var docs = [];
      yaml.safeLoadAll(data, function(doc) {
        docs.push(doc);
      });
      var result = docs.length===1 ? docs[0] : docs;
      this.queue('module.exports = ' + JSON.stringify(result));
      this.queue(null);
    }
  }

  return through(write, end);
};
