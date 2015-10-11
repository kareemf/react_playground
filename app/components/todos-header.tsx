import React = require('react');

var TodoActions = require('../actions/todo-actions');
var TodoTextInput = require('./todo-text-input');

class TodosHeader extends React.Component<{}, {}> {

  constructor() {
    super();
  }

  render() {
    return (
      <header id='header'>
        <h1>todos</h1>
        <TodoTextInput
          id='new-todo'
          placeholder='What needs to be done?'
          onSave={this._onSave}
        />
      </header>
    );
  }

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave(text) {
    if (text.trim()) {
      TodoActions.create(text);
    }
  }

}

export = TodosHeader;