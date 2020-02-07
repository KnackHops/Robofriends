import React, { Component } from 'react';
import './App.css';
import CardsList from './CardsList';
import SearchFunc from './SearchFunc';
import Scroll from './Scroll';


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
        const filteredRobots = this.state.profile.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchfield);
        });
        if (this.state.profile.length === 0){
            return <h1 className="tc title">Loading!</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="title">R O B O F R I E N D S</h1>
                    <SearchFunc onSearchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardsList profile = {filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;