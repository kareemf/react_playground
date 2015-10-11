import React = require('react');

var ENTER_KEY_CODE = 13;

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  onSave?: (value: string) => void;
  value?: string;
}

interface State {
  value: string;
}

class TodoTextInput extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    var value: string;
    value = this.props && this.props.value || '';

    this.state = { value };
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onChange = this._onChange.bind(this);
    this._save = this._save.bind(this);
  }

  render() {
    console.log('TodoTextInput state', this.state);
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  /**
   * @param {object} event
   */
  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  /**
   * @param  {object} event
   */
  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

};

export = TodoTextInput;