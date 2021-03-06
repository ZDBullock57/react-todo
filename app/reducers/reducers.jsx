var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
      break;
    default:
    return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
      break;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
      break;
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
      break;
    case 'DELETE_TODO':
      var updatedTodos = state;
      var i;
      for(i = 0; i < updatedTodos.length; i++)
      {
        if(updatedTodos[i].id === action.id)
        {
          updatedTodos.splice(i, 1);
        }
      }
      return [
        ...updatedTodos
      ];
      break;
    case 'UPDATE_TODO':
      var updatedTodos = state.map((todo) => {
        if(todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
      return updatedTodos;
      break;
    case 'LOGOUT':
      return [];
    default:
      return state;
  };
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
      break;
    case 'LOGOUT':
      return {};
      break;
    default:
      return state;
  }
};
