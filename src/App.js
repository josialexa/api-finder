import React, {Component} from 'react';
import Header from './Components/Header/Header.js'
import Home from './Components/Home/Home.js'
import CardDisplay from './Components/CardDisplay/CardDisplay.js'
import ApiDisplay from './Components/ApiDisplay/ApiDisplay.js'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedApi: {},
      home: <Home />,
      categories: <CardDisplay apiFlag={false} setDisplay={this.setDisplay} />,
      search: <CardDisplay apiFlag={true} setDisplay={this.setDisplay} />,
      info: <ApiDisplay api={{}}/>,
      dispChoice: 'home'
    }
  }

  setDisplay = (dispChoice, api=null) => {
    if(api) this.setState({info: <ApiDisplay api={api} />})
    
    this.setState({dispChoice})
  }

  render() {
    return (
      <div className="App">
        <Header setDisplay={this.setDisplay} />
        {this.state[this.state.dispChoice]}
      </div>
    );
  }
}

export default App;
