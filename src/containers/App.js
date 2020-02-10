import React, { Component } from 'react';
import './App.css';
import CardsList from '../components/CardsList';
import SearchFunc from '../components/SearchFunc';
import Scroll from '../components/Scroll';


class App extends Component{
    constructor() {
        super();
        this.state = {
            profile: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(user=>this.setState({profile: user}));
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value.toLowerCase() } );
    }

    render() {
        const { profile, searchfield } = this.state;

        const filteredRobots = profile.filter(user => {
            return user.name.toLowerCase().includes(searchfield);
        });
        return !profile.length ? 
        <h1 className="tc title">Loading!</h1> :
        (
            <div className="tc">
                <h1 className="title">R O B O F R I E N D S</h1>
                <SearchFunc onSearchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardsList profile = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;