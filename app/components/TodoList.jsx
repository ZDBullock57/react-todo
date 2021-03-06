var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

//var Todo = require('Todo');
import Todo from 'Todo';

export class TodoList extends React.Component {
  render() {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if(filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
