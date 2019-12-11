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
      categories: <CardDisplay apiFlag={false} setDisplay={this.setDisplay} clearCat={false} />,
      search: <CardDisplay apiFlag={true} setDisplay={this.setDisplay} clearCat={false} />,
      info: <ApiDisplay api={{}} update={this.updateData} />,
      dispChoice: 'home',
      clearCat: false
    }
  }

  componentDidMount() {
    axios.get('/api/apis')
    .then(response => {
      this.setState({
        search: <CardDisplay apis={response.data} apiFlag={true} setDisplay={this.setDisplay} clearCat={this.props.clearCat} />,
        categories: <CardDisplay apis={response.data} apiFlag={false} setDisplay={this.setDisplay} clearCat={this.props.clearCat} />
      })
    })
    .catch(error => console.log('Get APIs:', error))
  }

  setDisplay = (dispChoice, clearCat, api=null) => {
    this.setState({dispChoice, clearCat})
    
    if(api) this.setState({info: <ApiDisplay api={api} update={this.update} />})
  }

  update = (apis) => {
    this.setState({
      search: <CardDisplay apis={apis} apiFlag={true} setDisplay={this.setDisplay} clearCat={this.props.clearCat} />,
      categories: <CardDisplay apis={apis} apiFlag={false} setDisplay={this.setDisplay} clearCat={this.props.clearCat} />,
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
