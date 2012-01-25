var SET = module.exports = function SET(collection) {
    this.__internal = collection;
};

SET.prototype.add = function(obj) {
  var index = this.__internal.indexOf(obj);
  if (index === -1) {
    this.__internal.add(obj);
  } else {
    this.__internal.set(index, obj); //TODO: if its already there why readding it?
  }
};

SET.prototype.addAll = function(collection) {
    //TODO: check if they are not present
  collection.forEach(function(obj) {
      this.add(obj);
    });
};

SET.prototype.clear = function() {
  this.__internal.clear();
};

SET.prototype.contains = function(obj) {
  return this.__internal.contains(obj);
};

SET.prototype.containsAll = function(collection) {
  //TODO:
};

SET.prototype.isEmpty = function() {
  //TODO:
};

SET.prototype.remove = function(obj) {
  //TODO:
};

SET.prototype.removeAll = function(collection) {
  //TODO:
};

SET.prototype.size = function() {
  //TODO:
};

SET.prototype.toArray = function() {
  //TODO: like flatten in underscore?
};