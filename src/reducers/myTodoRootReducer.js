import { combineReducers } from 'redux'

import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,SETVISIBILITYFILTER,VisibilityFilters} from '../actions/my_todo_actions'

function todos(state = [], action) {
    let stateMaxIndex=0;
    for(let todo of state){
        if(todo.index>stateMaxIndex){
            stateMaxIndex=todo.index ;
        }
    }
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    index: stateMaxIndex+1,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {

                    if (todo.index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    }else{
                        return todo;
                    }
                }
            )
        case DELETE_TODO:
            return state.filter(todo=>!(todo.index === action.index));
        default:
            // 和state=[]一样的作用，默认值
            return state
    }

}

function  visibilityFilter(state=VisibilityFilters.SHOW_ALL,action) {
    switch (action.type){
        case SETVISIBILITYFILTER:return action.filter
        default :return state;
    }

}

const  myTodoApp=combineReducers({todos,visibilityFilter});

export default  myTodoApp;