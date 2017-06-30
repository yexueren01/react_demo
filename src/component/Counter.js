import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        this.onIncrement = this.onIncrement.bind(this);

        this.state = {
            onIncrement: function () {
                props.store.dispatch({type: 'INCREMENT'})
            },
            value:props.store.getState()
        }
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    onIncrement() {
        this.props.store.dispatch({type: 'INCREMENT'})
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const value = this.props.value;
        const onDecrement = this.props.onDecrement;
        return (
            <p>
                Clicked state value: {this.state.value} times
                <br/>
                Clicked props value: { value} times
                {' '}
                <button onClick={this.onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}

Counter.propTypes = {
    onIncrement: PropTypes.func.isRequired
}

export default Counter
