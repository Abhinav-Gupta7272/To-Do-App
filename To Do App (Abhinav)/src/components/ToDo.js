import React, {Component} from 'react';

import classes from './ToDo.module.css';
import ListItem from './ListItem/Listitem';
import Navbar from './Navbar/Navbar';


class ToDo extends Component {
    state = {
        items: [],
        filtered: [],
        clr: false,
        showlist: true,
        load: true,
        active1: true,
        active: false
    }

    loadHandler = () =>{
        this.setState({load: false, active: true, active1: false});
    
        }
    
        loadHandler1 = () =>{
            this.setState({load: true, active: false, active1: true});
        }

    show = () => {
        console.log("hello");
    }

    addItem = () => {
        event.preventDefault();
        const topic = document.getElementById("topic").value;
        const desc = document.getElementById("desc").value;
        let list = this.state.items;
        var d = new Date();
        if(topic !== "" && desc !== "") {
            const feilds = {
                text: topic,
                description: desc,
                date: d,
                key: d+"abc"
            };
            list.push(feilds);
            this.setState({ items : list, clr: true });
        }
        document.getElementById("topic").value = "";
        document.getElementById("desc").value = "";
    }

    remove = (id) => {
        let arr = this.state.items.filter((data) => {
            return (data.key != id)
        })
        this.setState({items: arr});
    }

    erase = () => {
        this.setState({items: [], clr: false});
    }

    blur = () => {
        this.setState({showlist: true});
    }

    click = () => {
        this.setState({showlist: false});
    }

        handleChange = (e) => {
        let currentList = [];
        let newList = [];
            if (e.target.value !== "") {
          currentList = this.state.items;
          newList = currentList.filter(item => {
            const lc = item.text.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
              });
        } else {
          newList = "";
        }
        this.setState({
          filtered: newList
        });
      }

    render() {
        return (
            <div>
             <p className={classes.header}>ToDo App</p>
                <Navbar load={this.loadHandler} load1={this.loadHandler1} active={this.state.active} active1={this.state.active1} />
            <main className={classes.content}>
               {this.state.load ? <form onSubmit={this.addItem}>
                   <input type="text" id="topic" placeholder="Enter Task" 
                        value={this.state.text}
                   />
                   <input type="textarea" id="desc" placeholder="Description" 
                        value={this.state.description}
                   />
                   <button className={classes.btn} type="submit">ADD</button>
                   {this.state.clr ? <button className={classes.btn} type="clear" onClick={this.erase}>Clear All</button> : null }
               </form> : null }
               {!this.state.load ? 
                        <div>  
                            <p className={classes.head}>Search</p>
                            <input type="text"  
                                className={classes.search} 
                                placeholder="Search..." 
                                onChange={this.handleChange} 
                                onClick={this.click} 
                                onBlur={this.blur}
                            />
                            {this.state.clr ? <button className={classes.btn} type="clear" onClick={this.erase}>Clear All</button> : null }
                            </div> : null }
               <div>
               {this.state.showlist ?
                        this.state.items.length ? 
                        this.state.items.map((data) => {
                            return <ListItem key={data.key} data={data} delete={this.remove} />
                        }) : <p className={classes.error}>NO Tasks Added</p>  
                    : this.state.filtered.length ? 
                        this.state.filtered.map((data) => {
                            return <ListItem key={data.key} data={data} delete={this.remove}/>
                        }) : <p className={classes.error}>NO Tasks Added</p> 
                    }
                    </div>
            </main>
            </div>
        );
    }
}

export default ToDo;
