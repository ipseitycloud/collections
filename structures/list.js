/**
 * A List. A collection that cares about the order on which the elements are inserted.
 */

// variables
var _ = require('underscore')
  , Log = require('Log')
  , log = new Log();

// The List
var LIST = function(){};

// Internal array to handle all the information
LIST.prototype.__internal = new Array();

// Adds a number (num) of spaces starting at a given position (index).
LIST.prototype.__addSpaces = function(num, index) {
  for (var i = this.__internal.length - 1; i >= index; i--) {
      this.__internal[i+num] = this.__internal[i];
    }
}

// Removes a number (num) of spaces starting at a given position (index).
LIST.prototype.__removeSpaces = function(num, index) {
  if (index + num > this.__internal.length) { num = this.__internal.length - index; }
  for (var i = index; i < index + num; i++) {
      this.__internal[i] = this.__internal[i+num];
    }
  _.initial(this.__internal, num);
}

/**
 * Adds an object into the list.
 *
 * @param {Object} obj  The object to insert into the list.
 * @param {Number} index  Optional. The position (zero-based) on which the object will be inserted on. If this is not provided then the object is inserted at the end of the list.
 */
LIST.prototype.add = function(obj, index) {
  if (index) {
    this.__addSpaces(1, index);
    this.__internal[index] = obj;
  } else {
    this.__internal.push(obj);
  }
}

/**
 * Adds all the elements within a given collection|array into this list.
 *
 * @param {Array} array  The elements to insert into this list.
 * @param {Number} index  Optional. The position (zero-based) on which the object will be inserted on. If this is not provided then the object is inserted at the end of the list.
 */
LIST.prototype.addAll = function(array, index) {
  if (index) { index--; }
  var current = this;
  array.forEach(function(elem) {
      if (index) {
        index++;
      }
      current.add(elem, index)
    });
}

/**
 * Clears this list.
 */
LIST.prototype.clear = function() {
  this.__internal = new Array();
}

/**
 * Gets the index on which an object is stored in the list.
 *
 * @param {Object} obj. The object to look for in the list.
 *
 * @returns {Number} The index on which this object is in the list, or -1 if it's not there.
 */
LIST.prototype.indexOf = function(obj) {
  return _.indexOf(this.__internal, obj);
}

/**
 * Determines whether an object is present on the list or not.
 *
 * @param {Object} obj  The object to look for in the list.
 *
 * @returns {Boolean} True if the object is present on the list, false otherwise.
 */
LIST.prototype.contains = function(obj) {
  return (this.indexOf(obj) != -1);
}

/**
 * Gets an object on a given index.
 *
 * @param {Number} index  The index to get the object from.
 *
 * @returns {Object} The object at the given index.
 */
LIST.prototype.get = function(index) {
  return this.__internal[index];
}

/**
 * Determines if this list contains any object.
 *
 * @returns {Boolean} True if the list contains no objects at all, false if it contains at least one item.
 */
LIST.prototype.isEmpty = function() {
  return (this.__internal.length == 0);
}

/**
 * Removes the object on an specified index and gets the list reordered.
 *
 * @param {Number} index  The index on which the object will be removed.
 */
LIST.prototype.removeIndex = function(index) {
  this.__removeSpaces(1, index);
}

/**
 * Removes the specified object from the list and gets the list reordered.
 *
 * @param {Object} obj  The object to remove.
 */
LIST.prototype.removeObject = function(obj) {
  var index = this.indexOf(obj);
  if (index != -1 ) { this.removeIndex(index); }
}

/**
 * Removes a range of objects from the list, starting at a give index (zero-based) and ending at another index (one-based).
 *
 * @param {Number} fromIndexInc  The index to start removing at (inclusive).
 * @param {Number} toIndexExc  The index to end removing at (exclusive).
 */
LIST.prototype.removeRange = function(fromIndexInc, toIndexExc) {
  var num = toIndexExc - fromIndexInc;
  this.__removeSpaces(num, fromIndexInc);
}

/**
 * Sets an object into an specified index replacing the element on that index.
 *
 * @param {Number} index  The index to replace at.
 * @param {Object} obj  The object to insert in that index.
 */
LIST.prototype.set = function(index, obj) {
  this.__internal[index] = obj;
}

/**
 * Gets the size of this list.
 *
 * @returns {Number}  The number of elements on the list.
 */
LIST.prototype.size = function() {
  return this.__internal.length;
}

module.exports = LIST;