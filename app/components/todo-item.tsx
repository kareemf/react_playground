import React = require('react');

var TodoActions = require('../actions/todo-actions');
var TodoTextInput = require('./todo-text-input');

var classNames = require('classnames');

class TodoItem extends React.Component<{todo: any}, {isEditing: boolean}> {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };

    this._onToggleComplete = this._onToggleComplete.bind(this);
    this._onDoubleClick = this._onDoubleClick.bind(this);
    this._onSave = this._onSave.bind(this);
    this._onDestroyClick = this._onDestroyClick.bind(this);
  }

  render() {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className='edit'
          onSave={this._onSave}
          value={todo.text}
        />;
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <li
        className={classNames({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className='view'>
          <label
            htmlFor={this.props.todo.id}
            onDoubleClick={this._onDoubleClick}
            className='mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect'>
            <input
              id={this.props.todo.id}
              type='checkbox'
              className='mdl-checkbox__input'
              checked={todo.complete}
              onChange={this._onToggleComplete}/>
            <span className='mdl-checkbox__label'>{todo.text}</span>
            <button
              className='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored'
              onClick={this._onDestroyClick}>
              <i className='material-icons'>clear</i>
            </button>
          </label>
        </div>
        {input}
      </li>
    );
  }

  _onToggleComplete() {
    TodoActions.toggleComplete(this.props.todo);
  }

  _onDoubleClick() {
    this.setState({isEditing: true});
  }

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  }

  _onDestroyClick() {
    TodoActions.destroy(this.props.todo.id);
  }
};

export = TodoItem;