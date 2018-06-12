import React, { Component } from 'react';
import '../App.css';
import List from './List';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.addToDo = this.addToDo.bind(this);
  }
  addToDo(e){
        e.preventDefault();
        if (typeof(this.text.value) === 'string' && this.text.value.length > 0){ 
            this.setState({data: [...this.state.data, this.text.value]}); 
        }
        this.text.value = '';
  }

  
  render() {
    return (
      <div className="App">
        <h1> To-do list </h1>

        <form className="todo-form" onSubmit={this.addToDo} >
        <input type = "text" ref={ ( input ) => this.text = input} placeholder="Add new To-do"   />
        <button type="submit" >Add</button>
        </form>
        <ul className='UL'>
          {this.state.data.map(i => <List key={i} text={i} spanText="X " />)}
        </ul>    
      </div>
    );
  }
}

export default App;
