import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo_actions'

let AddTodo = ({ dispatch }) => {
    let inputTodo
    let inputTodo0
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!inputTodo.value.trim()) {
                        return
                    }
                    dispatch(addTodo(inputTodo.value))
                    inputTodo.value = ''
                }}
            >
                <input
                    ref={node => {
                        inputTodo = node
                    }}
                />

                <input
                    ref={node => {
                        inputTodo0 = node
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

// AddTodo = connect()(AddTodo)

export default AddTodo