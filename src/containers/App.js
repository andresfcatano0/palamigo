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
      amigos: [],
      searchfield: ""
    }
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ amigos: users })); 
  }

  onSearchChange = (event) => {
    // Updates the state of search field with whatever is typed
    this.setState({searchfield: event.target.value})
  }
  
  render() {
    const { amigos, searchfield } = this.state;
    const filteredAmigos = amigos.filter(amigo => {
      return amigo.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1 className='f1'>Palamigos</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList amigos={filteredAmigos}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App; 