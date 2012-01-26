/**
 * A List. A collection that cares about the order on which the elements are inserted.
 */

// variables
var _ = require('underscore');

// The List
var LIST = module.exports = function LIST() {
    this.__internal = [];
};

/**
 * Adds an object into the list.
 *
 * @param {Object} obj  The object to insert into the list.
 * @param {Number} index  Optional. The position (zero-based) on which the object will be inserted on. If this is not provided then the object is inserted at the end of the list.
 */
LIST.prototype.add = function(obj, index) {
  if (!index) { index = this.__internal.length; }
  this.__internal.splice(index, 0, obj);
};

/**
 * Adds all the elements within a given collection|array into this list.
 *
 * @param {Array} array  The elements to insert into this list.
 * @param {Number} index  Optional. The position (zero-based) on which the object will be inserted on. If this is not provided then the object is inserted at the end of the list.
 */
LIST.prototype.addAll = function(array, index) {
  if (index) {
    this.__internal = this.__internal.slice(0, index).concat(array, this.__internal.slice(index));
  } else {
    this.__internal = this.__internal.concat(array);
  }
};

/**
 * Removes all elements on this list.
 */
LIST.prototype.clear = function() {
  this.__internal = [];
};

/**
 * Gets the index on which an object is stored in the list.
 *
 * @param {Object} obj. The object to look for in the list.
 *
 * @returns {Number} The index on which this object is in the list, or -1 if it's not there.
 */
LIST.prototype.indexOf = function(obj) {
  return _.indexOf(this.__internal, obj);
};

/**
 * Determines whether an object is present on the list or not.
 *
 * @param {Object} obj  The object to look for in the list.
 *
 * @returns {Boolean} True if the object is present on the list, false otherwise.
 */
LIST.prototype.contains = function(obj) {
  return (this.indexOf(obj) != -1);
};

/**
 * Gets an object on a given index.
 *
 * @param {Number} index  The index to get the object from.
 *
 * @returns {Object} The object at the given index.
 */
LIST.prototype.get = function(index) {
  return this.__internal[index];
};

/**
 * Determines if this list contains any object.
 *
 * @returns {Boolean} True if the list contains no objects at all, false if it contains at least one item.
 */
LIST.prototype.isEmpty = function() {
  return (this.__internal.length === 0);
};

/**
 * Removes the object on an specified index and gets the list reordered.
 *
 * @param {Number} index  The index on which the object will be removed.
 */
LIST.prototype.removeIndex = function(index) {
  this.__internal.splice(index,1);
};

/**
 * Removes the specified object from the list and gets the list reordered.
 *
 * @param {Object} obj  The object to remove.
 */
LIST.prototype.removeObject = function(obj) {
  var index = this.indexOf(obj);
  if (index != -1 ) { this.__internal.splice(index,1); }
};

/**
 * Removes a range of objects from the list, starting at a give index (zero-based) and ending at another index (one-based).
 *
 * @param {Number} fromIndex  The index to start removing at (inclusive).
 * @param {Number} toIndex  The index to end removing at (inclusive).
 */
LIST.prototype.removeRange = function(fromIndex, toIndex) {
  if (toIndex > this.__internal.length) { toIndex = this.__internal.length - 1; }
  this.__internal.splice(fromIndex,toIndex);
};

/**
 * Sets an object into an specified index replacing the element on that index.
 *
 * @param {Number} index  The index to replace at.
 * @param {Object} obj  The object to insert in that index.
 */
LIST.prototype.set = function(index, obj) {
  this.__internal[index] = obj;
};

/**
 * Gets the size of this list.
 *
 * @returns {Number}  The number of elements on the list.
 */
LIST.prototype.size = function() {
  return this.__internal.length;
};

//TODO: a way to clean up the list, cleanup empty spaces if any? should 
//that funcion be used internally only by us