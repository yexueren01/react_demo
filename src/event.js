import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Toggle extends React.Component {
    constructor(){
        super();
        this.state={
            isOn:true,
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isOn?"ON":"OFF"}
                </button>
            </div>
        );
    }
}

    ReactDOM.render(
        <Toggle/>,
        document.getElementById('root')
    );