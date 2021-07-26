import React, { Component } from "react";

import classes from './App.module.css';
import ToDo from "./components/ToDo";

export default class App extends Component {
    render() {
        return (
            <div className = {classes.app}>
                <ToDo />
            </div>     
        );
    }
}
