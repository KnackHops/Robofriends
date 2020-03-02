import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import './App.css';
import CardsList from '../components/CardsList';
import SearchFunc from '../components/SearchFunc';
import Scroll from '../components/Scroll';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor() {
        super();
        this.state = {
            profile: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(user=>this.setState({profile: user}));
    }

    render() {
        const { profile } = this.state;
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = profile.filter(user => {
            return user.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return !profile.length ? 
        <h1 className="tc title">Loading!</h1> :
        (
            <div className="tc">
                <h1 className="title">R O B O F R I E N D S</h1>
                <SearchFunc onSearchChange = {onSearchChange}/>
                <Scroll>
                    <CardsList profile = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);