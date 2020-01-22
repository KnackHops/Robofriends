import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import { profile } from './Profile';
import * as serviceWorker from './serviceWorker';
import 'tachyon';

ReactDOM.render(
    <div>
        <Card name={profile[0].Name} email={profile[0].Email} id={profile[0].Id}/>
        <Card name={profile[1].Name} email={profile[1].Email} id={profile[1].Id}/>
        <Card name={profile[2].Name} email={profile[2].Email} id={profile[2].Id}/>
        <Card name={profile[3].Name} email={profile[3].Email} id={profile[3].Id}/>
        <Card name={profile[4].Name} email={profile[4].Email} id={profile[4].Id}/>
        <Card name={profile[5].Name} email={profile[5].Email} id={profile[5].Id}/>
        <Card name={profile[6].Name} email={profile[6].Email} id={profile[6].Id}/>
        <Card name={profile[7].Name} email={profile[7].Email} id={profile[7].Id}/>
        <Card name={profile[8].Name} email={profile[8].Email} id={profile[8].Id}/>
        <Card name={profile[9].Name} email={profile[9].Email} id={profile[9].Id}/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
