import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/todoRootReducer'
import TodoApp from './component/TodoApp'

import { Router, Route, browserHistory } from 'react-router';
let store = createStore(todoApp)

render(
    <Provider store={store}>
        <TodoApp />
     </Provider>
,
    document.getElementById('root')
)