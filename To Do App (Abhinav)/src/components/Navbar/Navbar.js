import React, {Component} from 'react';

import classes from './Navbar.module.css';

class Navbar extends Component {
    render() {
        return (
            <div className={classes.topnav}>
                <a onClick={this.props.load1} className={this.props.active1 ? classes.active : null}>AddItem</a>
                <a onClick={this.props.load} className={this.props.active ? classes.active : null}>List</a>
            </div> 
        );
    }
}

export default Navbar;
