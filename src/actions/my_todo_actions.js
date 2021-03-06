export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const  DELETE_TODO='DELETE_TODO'
export const  SETVISIBILITYFILTER='SETVISIBILITYFILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export function addTodo(text) {
    return {type:ADD_TODO,text}
}

export  function toggleTodo(index) {
    return {
        type:TOGGLE_TODO,
        index
    }
}

export  function  deleteTodo(index) {
    return {
        type:DELETE_TODO,
        index
    }
}

//SETVEISIBILITYFILTER
export  function setVisibilityFilter(filter) {
    return {
        type:SETVISIBILITYFILTER,
        filter
    }
}