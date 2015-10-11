// import Dispatcher = require('./dispatcher');

// class AppDispatcher extends Dispatcher{
//     constructor() { super();}

//     *
//     * A bridge function between the views and the dispatcher, marking the action
//     * as a view action.  Another variant here could be handleServerAction.
//     * @param  {object} action The data coming from the view.

//     static handleViewAction(action) {
//         AppDispatcher.dispatch({
//             source: 'VIEW_ACTION',
//             action: action
//         });
//     }
// }

// export = AppDispatcher

import flux = require('flux');
var basicDispatcher = new flux.Dispatcher<any>();
export = basicDispatcher;