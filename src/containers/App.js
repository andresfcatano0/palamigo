import React, {Component} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry.js"
import "./App.css"

class App extends Component  {  
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users })); 
  }

  onSearchChange = (event) => {
    // Updates the state of search field with whatever is typed
    this.setState({searchfield: event.target.value})
  }
  
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1 className='f1'>Palamigos</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App; 