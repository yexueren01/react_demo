import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={this.state.temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);