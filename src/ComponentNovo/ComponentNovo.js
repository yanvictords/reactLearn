import React, { Component } from 'react';

class ComponentNovo extends Component {  

  state = {
    hello: "Hello World, "
  }

  constructor(props){
    console.log("ComponenteNovo", props)
    super(props)
    this.trocarDeNome = this.trocarDeNome.bind(this)
  }

  printHelloWorld () {
    const hello = this.state.hello
    const nome = this.props.nomeComponentNovo
    const frase = hello + nome + "!"
    return (
      <div>
        <span> { frase } </span> 
      </div>
    )
  }

  trocarDeNome(){
    console.log('CLICOU!')
    const executaTrocar = this.props.trocarNome
    executaTrocar('Yan')
  }

  render() {
    return (
      <div>
        { this.printHelloWorld() }
        <button onClick={this.trocarDeNome}> Trocar </button>
      </div>
    );
  }
}

export default ComponentNovo;