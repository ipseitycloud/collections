/**
 * A Map.  A mapping from keys to values. Each key can map to one value.
 */

// The MAP
var MAP = module.exports = function MAP() {
    this.__internal = [];
};

/**
 * Clears this MAP.
 */
MAP.prototype.clear = function() {
  this.__internal = [];
};

/**
 * Contains some key.
 * @key the key to find
 * @returns boolean
 */
MAP.prototype.containsKey = function(key) {
  //TODO
};

/**
 * Contains some value.
 * @value the value to find
 * @returns boolean
 */
MAP.prototype.containsValue = function(value) {
  //TODO
};

/**
 * Returns a Set view of the mappings contained in this map.
 * @returns collections.set
 */
MAP.prototype.entrySet = function() {
  //TODO
};

/**
 * Gets the value of the given key
 *
 * @param {String} key value
 *
 * @returns {Object} value or null if not found
 */
MAP.prototype.get = function(key) {
  //TODO
};

/**
 * Determines if this MAP contains any object.
 *
 * @returns {Boolean} True if the MAP contains no objects at all, false if it contains at least one item.
 */
MAP.prototype.isEmpty = function() {
  return (this.__internal.length === 0);
};

/**
 * Returns a set of the keys in this map.
 *
 * @returns {collections.set}
 */
MAP.prototype.keySet = function() {
  //TODO
};

/**
 * Add new entry to the map
 *
 * @param {Map(key, value)} map
 * @returns {Object} value inserted 
 */
MAP.prototype.put = function(key, value) {
  //TODO
};

/**
 * copies mappings from the specified map to this map
 *
 * @param {collections.map} map
 */
MAP.prototype.putAll = function(map) {
  //TODO
};

/**
 * Removes the mapping by the specified key
 *
 * @param {String} Key
 * @returns {Object} Value of the key deleted
 */
MAP.prototype.remove = function(key) {
    //TODO
};

/**
 * Gets the size of this MAP.
 *
 * @returns {Number}  The number of mappings on the MAP.
 */
MAP.prototype.size = function() {
  return this.__internal.length;
};

/**
 * Gets the values of this map
 *
 * @returns {collection}
 */
MAP.prototype.values = function(){
    //TODO
};