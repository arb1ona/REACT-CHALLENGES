import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        //  console.log(event.target.value)
        this.setState({ searchTerm: event.target.value })  // YOU CALL IT LIKE A FUNCTION AND PROVIDE AN OBJECT
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();

        // console.log(searchTerm)
        // const { searchTerm, value1, value, } = this.state;
        // console.log(this.state.searchTerm, this.state.value1, this.state.value2) 
        // WE HAVE A MUCH MUCH MORE CLEANED CODING NOW

    }



    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar
