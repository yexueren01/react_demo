import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Welcome extends  React.Component{
    render(){
        return (
            <div>
                {this.props.userInfo.name}
            </div>
        )
    }
}

class App extends React.Component {
    constructor(){
        super();
        this.state={
            userInfo:{name:"ke.zhang"},
        }
    }
    render() {
        return (
            <div className="App">
                <Welcome userInfo={this.state.userInfo}/>
                <Welcome userInfo={this.state.userInfo}/>
                <Welcome userInfo={this.state.userInfo}/>
            </div>
        );
    }
}




// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
