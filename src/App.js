import React, {Component} from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox"
// robots file is not using export default, so destructuring {} must be used because 
// the file could have multiple exports. 
import { robots } from "./robots";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }
  
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1>My Palamigos</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App; 