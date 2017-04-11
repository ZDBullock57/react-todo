var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed bool', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 0
      };

      var testState = [
        {
          id: 0,
          text: 'hello',
          completed: false,
          createdAt: undefined,
          completedAt: undefined
        }, {
          id: 1,
          text: 'hi yo',
          completed: false,
          createdAt: undefined,
          completedAt: undefined
        }, {
          id: 2,
          text: 'gigger gabber',
          completed: false,
          createdAt: undefined,
          completedAt: undefined
        }, {
          id: 3,
          text: 'Waka Flaka',
          completed: false,
          createdAt: undefined,
          completedAt: undefined
        }
      ];

      var res = reducers.todosReducer(df(testState), df(action));

      expect(res.length).toBe(4);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
