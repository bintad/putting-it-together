import React, { Component } from 'react';

class Putting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentAge: props.age
        };
    }
    birthdayClickHandler = () => {
        this.setState({
            currentAge: this.state.currentAge + 1

        });

    }

    render() {

        const {
            firstName,
            lastName,
            age,
            hairColor,
        } = this.props;
        
        return (
            <>
            <h2>{this.props.lastName}, {this.props.firstName}</h2>
            <p>Age: {this.state.currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={this.birthdayClickHandler}>Birthday button for 
            {firstName} {lastName}</button>
    
            </>

        );
    }
}


export default Putting;