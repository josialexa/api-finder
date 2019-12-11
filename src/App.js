import React, {Component} from 'react'
import axios from 'axios'
import Header from './Components/Header/Header.js'
import Home from './Components/Home/Home.js'
import CardDisplay from './Components/CardDisplay/CardDisplay.js'
import ApiDisplay from './Components/ApiDisplay/ApiDisplay.js'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      home: <Home />,
      categories: <CardDisplay apiFlag={false} setDisplay={this.setDisplay} />,
      search: <CardDisplay apiFlag={true} setDisplay={this.setDisplay} />,
      info: <ApiDisplay api={{}} update={this.updateData} />,
      dispChoice: 'home'
    }
  }

  componentDidMount() {
    axios.get('/api/apis')
    .then(response => {
      this.setState({
        search: <CardDisplay apis={response.data} apiFlag={true} setDisplay={this.setDisplay} />,
        categories: <CardDisplay apis={response.data} apiFlag={false} setDisplay={this.setDisplay} />
      })
    })
    .catch(error => console.log('Get APIs:', error))
  }

  setDisplay = (dispChoice, api=null) => {
    if(api) this.setState({info: <ApiDisplay api={api} update={this.update} />})
    
    this.setState({dispChoice})
  }

  update = (apis) => {
    this.setState({
      search: <CardDisplay apis={apis} apiFlag={true} setDisplay={this.setDisplay} />,
      categories: <CardDisplay apis={apis} apiFlag={false} setDisplay={this.setDisplay} />,
      dispChoice: 'search'
    })
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
