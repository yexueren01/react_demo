import  React from 'react'
import  MyLink from '../component/MyLink'
import {VisibilityFilters} from '../actions/my_todo_actions'


let MyTodoFliter = () => (
    <div>
        <MyLink filter={VisibilityFilters.SHOW_ALL}>all</MyLink>
        ,
        <MyLink filter={VisibilityFilters.SHOW_ACTIVE}>active </MyLink>
        ,
        <MyLink filter={VisibilityFilters.SHOW_COMPLETED}>completed</MyLink>
    </div>
)


export  default  MyTodoFliter;