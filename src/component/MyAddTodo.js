import React from 'react'
import {connect} from 'react-redux'
import  {addTodo} from '../actions/my_todo_actions'

let inputtext
let MyAddTodo = ({dispatch, handlerAddTodoClick, value}) => {
    return (
        <div>
            <input   ref={node => {
                inputtext = node
            }}/>

            <button onClick={handlerAddTodoClick}>addTodo</button>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, myOwnProps) => {

    return {
        handlerAddTodoClick: () => {

            var text = inputtext.value;
            dispatch(addTodo(text));
            inputtext.value = ''

        }
    }

}


MyAddTodo = connect(mapStateToProps,
    mapDispatchToProps)(MyAddTodo)

export default  MyAddTodo;
