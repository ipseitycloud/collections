
var vows = require('vows'),
  assert = require('assert'),
  collections = require('../index.js');
//  , Log = require('Log')
//  , log = new Log();

var List = collections.getList();
var TEST = vows.describe('List test').addBatch({
    'Creating new list' : {
      topic : function (){
          var list = new List();
          return list;
      },
      'is not undefined' : function(list) {
        assert.notEqual(list, undefined, 'List is undefined');
      },
      'is not null' : function(list) {
        assert.notEqual(list, null, 'List is null');
      },
      'Adding and getting one item' : function(list) {
        list.add('Test');
        assert.equal(list.size(), 1, 'List has no single element');
        assert.equal(list.get(0), 'Test', 'First element is not Test');
        assert.ok(list.contains('Test'), 'List does not contain Test');
        assert.equal(list.indexOf('Test'), 0, 'Test is not at first element');
        list.clear();
        assert.equal(list.size(), 0, 'List has elements');;
      },
      teardown : function(list){
        list.clear();
      }
    }
  }).addBatch({
    'Checking some methods' : {
      topic : function (){
          var list = new List();
          return list;
      },
      'Adding 5, removing 1, removing 2, contains and index' : function(list) {
        list.addAll(['One', 'Two', 'Three', 'Four', 'Five']);
        assert.equal(list.size(), 5, 'Problem inserting an array of 5');
        list.removeIndex(2);        
        assert.equal(list.size(), 4, 'Problem while removing 1 item');
        list.removeRange(1, 2);
        assert.equal(list.size(), 2, 'Problem while removing range');
        assert.equal(list.contains('Two'), false, 'List does contain Two');
        assert.equal(list.contains('Five'), true, 'List does not contain Five');
        assert.equal(list.indexOf('Three'), -1, 'Three was found');
        assert.equal(list.indexOf('One'), 0, 'One is not at the first element');
      },
      teardown : function(list){
        list.clear();
      }
    }
  });

module.exports = TEST;