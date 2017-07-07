import React from 'react'
import PropTypes from 'prop-types'
import {Provider } from 'react-redux'
import {createStore } from 'redux'
import  myTodoApp from '../reducers/myTodoRootReducer'
import  MyTodoApp from './MyTodoApp'
import  TodoApp from './TodoApp'

let store = createStore(myTodoApp)
const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <MyTodoApp/>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root