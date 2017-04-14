var $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Fillter by searchText
    filteredTodos = filteredTodos.filter((todo) => {

    todo.text.toString().toLowerCase();

    return searchText.length === 0 || todo.text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
