import React from 'react';
import * as Redux from 'react-redux';

//var TodoList = require('TodoList'); changed to
import TodoList from 'TodoList';
//var AddTodo = require('AddTodo');
import AddTodo from 'AddTodo';
//var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export class TodoApp extends React.Component {

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(TodoApp);
