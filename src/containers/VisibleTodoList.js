import { connect } from 'react-redux'
import React from 'react'
import  TodoList from '../component/TodoList.js'
import  {VisibilityFilters,toggleTodo} from '../actions/todo_actions'


const visibleTodos=(todos,filter)=>{
    switch(filter){
        case  VisibilityFilters.SHOW_ALL:
            return  todos;
        case  VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed)
        case  VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed)
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        todos:visibleTodos(state.todos,state.visibilityFilter)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}


const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export  default  VisibleTodoList;
