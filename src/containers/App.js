import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProfile, requestProfile } from '../actions';
import './App.css';
import CardsList from '../components/CardsList';
import SearchFunc from '../components/SearchFunc';
import Scroll from '../components/Scroll';

const mapStateToProps = state => {
    return {
        searchField: state.searchProfileReducer.searchField,
        profile: state.requestProfileReducer.profile,
        isPending: state.requestProfileReducer.isPending,
        error: state.requestProfileReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(searchProfile(event.target.value)),
        onRequestProfile: () => dispatch(requestProfile())
    }
}

class App extends Component{
    componentDidMount = () => {
        this.props.onRequestProfile();
    }

    render() {
        const { searchField, onSearchChange, profile, isPending } = this.props;
        //filtering profile for search function
        const filteredRobots = profile.filter(user => {
            return user.name.toLowerCase().includes(searchField.toLowerCase());
        });
        //display loading screen when isPending is true
        return isPending ? 
        <h1 className="tc title">Loading!</h1> :
        (
            <div className="tc">
                <h1 className="title">R O B O F R I E N D S</h1>
                {/*Sending onSearchChage function from mapDispatchToProps to component SearchFunc onChange =  { onSearchChange }*/}
                <SearchFunc onSearchChange = {onSearchChange}/>
                <Scroll>
                    {/*searchfunction output*/}
                    <CardsList profile = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);