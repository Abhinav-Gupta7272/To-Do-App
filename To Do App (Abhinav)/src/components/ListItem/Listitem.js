import React, {Component} from 'react';

import classes from'./ListItem.module.css';

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: false,
            item: this.props.data,
            toggle: "show",
            editShow: false
        } 
    }

    showDesc = () => {
        this.setState({details: !this.state.details});
        if(this.state.details) {
            this.setState({toggle: "show"});
        }
        else {
            this.setState({toggle: "hide"});
        }
    }

    edit = () => {
        this.setState({editShow: true});
    }

    update = () => {
        const topic = document.getElementById("topic1").value;
        const desc = document.getElementById("desc1").value;
        var d = new Date();
        console.log(this.state.item);
        if(topic !== "" && desc !== "") {
            const feilds = {
                text: topic,
                description: desc,
                date: d,
                key: this.state.item.key
            };
            this.setState({ item : feilds, editShow: false});
        }
        document.getElementById("topic").value = "";
        document.getElementById("desc").value = "";
    }

    render () {
        const item = this.state.item;
            return (
                <div key={item.key} className={classes.list}>
                    <div className={classes.item}>Topic : {item.text}
                        <p>(created at: {(item.date).getHours()+":"+(item.date).getMinutes()+":"+(item.date).getSeconds()})</p>
                        <div>
                            {this.state.details ? ("Description : "+item.description) : null}
                        </div>
                        {this.state.editShow ? <div>
                            <input type="text" id="topic1" placeholder="Enter Task" 
                                value={this.state.text}
                            />
                            <input type="textarea" id="desc1" placeholder="Description" 
                                    value={this.state.description}
                            />
                            <button className={classes.btn} type="submit" onClick={this.update}>UPDATE</button>
                        </div> : null }
                        <div className={classes.btndiv}>
                            <button className={classes.btnlist} onClick={this.showDesc}>{this.state.toggle}</button>
                            <button className={classes.btnlist} onClick={this.edit}>Edit</button>
                            <button className={classes.btnlist} onClick={() => this.props.delete(item.key)}>Delete</button>
                        </div>
                    </div>
                </div>
            );
    }
}

export default ListItems;