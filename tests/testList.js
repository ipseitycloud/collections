/**
 * Test for the list collection.
 */
var vows = require('vows'),
  assert = require('assert'),
  collections = require('../index.js');

// the list class
var List = collections.getList();

// the test to run
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
        assert.equal(list.size(), 0, 'List has elements');
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
  }).addBatch({
    'Checking the rest of methods' : {
      topic : function() {
        var list = new List();
        return list;
      },
      'Add 2, Add 1 in middle, add 3 in the middle, removeObject, set, clear, isEmpty' : function(list) {
        list.addAll(['First', 'Last']);
        list.add('Second', 1);
        assert.equal(list.size(), 3, 'The size is not 3');
        assert.equal(list.get(1), 'Second', 'The add in index failed');
        assert.equal(list.get(2), 'Last', 'Add in index did not proper sliced');
        list.addAll(['Thrid', 'Fourth', 'Fifth'], 2);
        assert.equal(list.size(), 6, 'The size is not 6');
        assert.equal(list.get(2), 'Thrid', 'The addAll in index failed');
        assert.equal(list.get(5), 'Last', 'AddAll in index did not proper sliced to the right');
        assert.equal(list.get(0), 'First', 'AddAll in index did not proper sliced to the left');
        assert.isTrue(list.contains('Fourth'));
        list.removeObject('Fourth');
        assert.isFalse(list.contains('Fourth'));
        assert.equal(list.size(), 5, 'Remove object did not get re-ordered all');
        assert.equal(list.get(3), 'Fifth', 'Remove object did not removed the space the list');
        list.set(4, 'Test');
        assert.equal(list.indexOf('Test'), 4, 'Set did not worked properly');
        assert.equal(list.size(), 5, 'Set altered the size');
        list.clear();
        assert.equal(list.size(), 0, 'List has elements');
        assert.isTrue(list.isEmpty());
      },
      teardown : function(list){
        list.clear();
      }
    }
  });

module.exports = TEST;