import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: red;
    text-align: center;
`;

const Field = styled.div`
    float:left;
    width:33%;
`;

const Label = styled.label`
    text-align: center;
`;

const Input = styled.input`
    text-align: center;
`;

class CarForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            brand: '',
            model: '',
            year: '',
        }
    }
    
    handleBrandChange = event => {
        this.setState({
            brand: event.target.value
        })
    }

    handleModelChange = event => {
        this.setState({
            model: event.target.value
        })
    }
    handleYearChange = event => {
        this.setState({
            year: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.brand} ${this.state.model} ${this.state.year}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field>
                    <Label>Brand</Label><br />
                    <Input type='text' value={this.state.brand} onChange={this.handleBrandChange} />
                </Field>

                <Field>
                    <Label>Model</Label><br />
                    <Input type='text' value={this.state.model} onChange={this.handleModelChange} />
                </Field>
               
               <Field>
                   <Label>Year</Label><br />
                   <Input type='text' value={this.state.year} onChange={this.handleYearChange} />
               </Field>

                <Button type='submit'>Submit</Button> 
            </form>
        )
    }

}


export default CarForm