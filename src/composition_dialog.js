import React from 'react';
import ReactDOM from 'react-dom';
import './dialog.css';



class FancyBorder extends  React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className={" FancyBorder FancyBorder-"+this.props.color}>
                {this.props.children}
            </div>
        );
    }



}

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title"> {this.props.title}</h1>
                <h2 className="Dialog-message">{this.props.message} </h2>
                <div>
                    {this.props.children}
                </div>
            </FancyBorder>
        );
    }
}

class SignUpDialog extends React.Component {
    constructor() {
        super();
        this.state={
            email:"",
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleEmailChange(event) {
        this.setState({email:event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.email);
        alert("hello"+this.state.email );
    }

    render() {
        return (
            <Dialog title="title" message="message">
                <input type="text"  onChange={this.handleEmailChange}/>
                <input type="submit" value="submit" onClick={this.handleSubmit}/>
            </Dialog>
        );
    }
}

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root')
);


// At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.
//
// Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
//
// If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.
