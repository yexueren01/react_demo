import { connect } from 'react-redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    addTodo,
    toggleTodo,
    setVisibilityFilter
} from '../actions/todo_actions'

import Link from '../component/Link'

const mapStateToProps = (state, ownProps) => {

    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const TodoFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default TodoFilterLink