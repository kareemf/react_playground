import React = require('react');
import LayoutHeader = require('./layout-header');
import LayoutFooter = require('./layout-footer');
import TodosMain = require('./todos-main');
import TodosHeader = require('./todos-header');
import TodoStore = require('../stores/todo-store');

interface TodosState {
    allTodos: any[];
    areAllComplete: boolean;
}

class TodoApp extends React.Component<{}, TodosState> {
    constructor() {
        super();
        this.state = this.getTodoState();

        this.getTodoState = this.getTodoState.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    render() {
        return(
            <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
                <LayoutHeader/>
                <main className='mdl-layout__content'>
                    <div className='page-content'>
                        <TodosHeader/>
                        <TodosMain
                            allTodos={this.state.allTodos}
                            areAllComplete={this.state.areAllComplete}
                        />
                        <TodosMain/>
                    </div>
                </main>
                <LayoutFooter/>
            </div>
        );
    }

    /**
    * Event handler for 'change' events coming from the TodoStore
    */
    _onChange() {
        this.setState(this.getTodoState());
    }

    private getTodoState() {
        return {
            allTodos: TodoStore.getAll(),
            areAllComplete: TodoStore.areAllComplete()
        };
    }
}

export = TodoApp;