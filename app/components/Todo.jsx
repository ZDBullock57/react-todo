var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export class Todo extends React.Component {
  render() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return (
      <div className={todoClassName}>
        <div>
          <input type="checkbox" checked={completed} onClick={() => {
              //this.props.onToggle(id);
              dispatch(actions.startToggleTodo(id, !completed));
          }}/>
        </div>
        <div>
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>
        <div className="delete-todo-button">
          <button className="button expanded" onClick={() => {
              dispatch(actions.startDeleteTodo(id));
            }}>Delete Todo</button>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
