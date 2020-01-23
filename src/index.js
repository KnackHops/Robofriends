import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import { profile } from './Profile';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
    <div>
        <Card name={profile[0].name} email={profile[0].email} id={profile[0].id}/>
        <Card name={profile[1].name} email={profile[1].email} id={profile[1].id}/>
        <Card name={profile[2].name} email={profile[2].email} id={profile[2].id}/>
        <Card name={profile[3].name} email={profile[3].email} id={profile[3].id}/>
        <Card name={profile[4].name} email={profile[4].email} id={profile[4].id}/>
        <Card name={profile[5].name} email={profile[5].email} id={profile[5].id}/>
        <Card name={profile[6].name} email={profile[6].email} id={profile[6].id}/>
        <Card name={profile[7].name} email={profile[7].email} id={profile[7].id}/>
        <Card name={profile[8].name} email={profile[8].email} id={profile[8].id}/>
        <Card name={profile[9].name} email={profile[9].email} id={profile[9].id}/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
