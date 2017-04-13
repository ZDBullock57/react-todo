var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var newTodo = this.refs.todoText.value;

    if(newTodo.length > 0)
    {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(newTodo));
      //this.props.onAddTodo(newTodo);
    }
    else
    {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
          <input type="text" ref="todoText" placeholder="Enter New Todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
