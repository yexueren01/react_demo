import React from 'react'
import MyAddTodo from './MyAddTodo'
import MyVisibleTodoList from '../containers/MyVisibleTodoList'
import MyTodoFliter from '../containers/MyTodoFliter'

const MyTodoApp = () => (
    <div>
        <MyAddTodo/>
        <MyTodoFliter/>
        <MyVisibleTodoList />

    </div>
)

export default MyTodoApp