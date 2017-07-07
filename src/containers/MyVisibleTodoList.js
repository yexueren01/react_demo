import React from 'react'
import {connect} from 'react-redux'
import  {toggleTodo,deleteTodo,VisibilityFilters} from '../actions/my_todo_actions'

let MyVisibleTodoList = ({todos, onTodoClick,onTodoDeleteClick}) => {
    return (
        <ul>
            {
                todos.map(todo => (
                      <div key={todo.index} >
                          < li key={todo.index}
                              onClick={() => onTodoClick(todo.index)}
                              style={
                                  {
                                      textDecoration: todo.completed ? 'line-through' : 'none'
                                  }
                              }
                          >   {todo.text}
                          </li>
                          <button onClick={()=>onTodoDeleteClick(todo.index)}>删除</button>
                      </div>

                    )
                )
            }
        </ul>
    )
}


const getVisiblieTodos=(todos,filter)=>{
    if(VisibilityFilters.SHOW_ALL===filter){
        return todos;
    }else if(VisibilityFilters.SHOW_ACTIVE===filter){
        return todos.filter(todo=>!todo.completed)
    }else if(VisibilityFilters.SHOW_COMPLETED===filter){
        return todos.filter(todo=>todo.completed)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisiblieTodos(state.todos,state.visibilityFilter)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onTodoDeleteClick:(id)=>{
            dispatch(deleteTodo(id))
        }
    }
}

MyVisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(MyVisibleTodoList)
export  default MyVisibleTodoList
