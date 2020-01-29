import React, { Component } from 'react';
import { profile } from './Profile';
import CardsList from './CardsList';
import SearchFunc from './SearchFunc';


class App extends Component{
    constructor() {
        super();
        this.state = {
            profile: profile,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value.toLowerCase() } );
    }

    render() {
        const filteredRobots = this.state.profile.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchfield);
        });

        return (
            <div className='tc'>
                <h1>R O B O F R I E N D S</h1>
                <SearchFunc onSearchChange = { this.onSearchChange }/>
                <CardsList profile = { filteredRobots } />
            </div>
        );
    }
}

export default App;