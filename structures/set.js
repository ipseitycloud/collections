var List = require('./list.js');

var SET = {};

SET.__internal = new List();

SET.prototype.add = function(obj) {
  var index = this.__internal.indexOf(obj);
  if (index == -1) {
    this.__internal.add(obj);
  } else {
    this.__internal.set(index, obj);
  }
}

SET.prototype.addAll = function(collection) {
  collection.forEach(function(obj) {
      this.add(obj);
    });
}

SET.prototype.clear = function() {
  this.__internal.clear();
}

SET.prototype.contains = function(obj) {
  return this.__internal.contains(obj);
}
