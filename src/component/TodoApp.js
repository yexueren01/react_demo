import React from 'react'
import TodoFooter from './TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = () => (
    <div>
        <AddTodo />
        {/*<VisibleTodoList />*/}
        <TodoFooter />
    </div>
)

export default TodoApp