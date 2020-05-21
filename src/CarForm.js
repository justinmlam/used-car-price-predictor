import React, { Component } from 'react'

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
                <label>Brand</label>
                <input type='text' value={this.state.brand} onChange={this.handleBrandChange} />

                <label>Model</label>
                <input type='text' value={this.state.model} onChange={this.handleModelChange} />

                <label>Year</label>
                <input type='text' value={this.state.year} onChange={this.handleYearChange} />

                <button type='submit'>Submit</button>
            </form>
        )
    }

}


export default CarForm