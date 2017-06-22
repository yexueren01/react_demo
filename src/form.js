import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoginForm extends  React.Component{

    constructor(){
        super();
        this.state={
            name:"请输入",
            password:"",
        };

        this.handleNameChange = this.handleNameChange.bind(this);

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }





    handleNameChange(event){
        this.setState({name: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <form>
                Name:
                <input type="text" value={this.state.name}  onChange={this.handleNameChange}/><br/>
                Password:
                <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <LoginForm/>,
    document.getElementById('root')
);