import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions/my_todo_actions'


let MyLink = ({active, children, onClick}) => {

    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={onClick}
        >
            {children}
        </a>
    )
}

MyLink.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}


const mapStateToProps = (state, ownProps) => {
    return {
        active:ownProps.filter===state.visibilityFilter
    }
}

const mapDispatchToProps =(dispatch, ownProps) => {
    return {
        onClick:()=>{
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
MyLink=connect(mapStateToProps, mapDispatchToProps)(MyLink)

export default MyLink