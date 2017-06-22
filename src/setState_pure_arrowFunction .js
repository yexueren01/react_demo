import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter:1,
        };
    }

    //移除触发
    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    // The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState((prevState, props)=>({
            date: new Date(),
            counter: prevState.counter+props.increment,
        }));
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h2>It is {this.state.counter} times.</h2>
            </div>
        );
    }
}


    ReactDOM.render(
        <Clock  increment="2"/>,
        document.getElementById('root')
    );