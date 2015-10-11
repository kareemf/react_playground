import React = require('react');

var TodoActions = require('../actions/todo-actions');
var TodoItem = require('./todo-item');

interface TodosProps {
    allTodos?: any[];
    areAllComplete?: boolean;
}

class TodosMain extends React.Component<TodosProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    // This section should be hidden by default
    // and shown when there are todos.
    console.log('todosMain props', this.props);
    if (Object.keys(this.props.allTodos || []).length < 1) {
      return null;
    }

    var allTodos = this.props.allTodos;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <section id='main'>
        <input
          id='toggle-all'
          type='checkbox'
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete}
        />
        <label htmlFor='toggle-all'>Mark all as complete</label>
        <ul id='todo-list'>{todos}</ul>
      </section>
    );
  }

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll() {
    TodoActions.toggleCompleteAll();
  }
};

export = TodosMain;