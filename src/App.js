import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentNovo from './ComponentNovo/ComponentNovo.js';

class App extends Component {

  state = {
    nome: "Bia"
  }

  constructor(props){
    console.log("App", props)
    super(props)
    this.trocarNome = this.trocarNome.bind(this)
  }

  trocarNome(nome) {
    this.setState({
      nome: nome
    })
  }

  render() {

    const nomeApp = this.state.nome
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ComponentNovo nomeComponentNovo={nomeApp} trocarNome={this.trocarNome} ></ComponentNovo>       
        </header>
      </div>
    );
  }
}

export default App;
