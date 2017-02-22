var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var newTodo = this.refs.todoText.value;

    if(newTodo.length > 0)
    {
      this.refs.todoText.value = '';
      this.props.onAddTodo(newTodo);
    }
    else
    {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <p>Addin todos!!!</p>
        <form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
          <input type="text" ref="todoText" placeholder="Enter New Todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
