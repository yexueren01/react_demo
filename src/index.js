import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myTodoApp from './reducers/myTodoRootReducer'

import Root from './component/Root'

let store = createStore(myTodoApp)

render(
    <Root store={store} />,
    document.getElementById('root')
)