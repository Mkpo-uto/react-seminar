import React, {Component} from 'react';
import logo from './logo.svg';
import SingleTodo from './SingleTodo';
import './App.css';

class App extends Component {

constructor(){
  super();
  this.state = {
    todos: [],
    currentTodo: ""
  };
}

onInputChange = e => {
  this.setState({currentTodo: e.target.value})
}


onClick = () => {
  let todosCopy = this.state.todos.slice();
  todosCopy.push(this.state.currentTodo);

  this.setState({todos: todosCopy, currentTodo: ""})
}

deleteTodo = i => {
    let todosCopy = this.state.todos.slice();

    todosCopy.splice(i,1);

    this.setState({todos: todosCopy});
  }

render(){

  let bulletTodos = this.state.todos.map((e, i) => {
    return(
      <SingleTodo todo={e} delete = {()=>this.deleteTodo(i)}/>
    //<li key={i}>{e}</li>
      );
  });



  return (

    <div>
      <input placeholder="Enter todo" value={this.state.currentTodo}
      onChange={this.onInputChange}/>
      <button onClick={this.onClick}>Add!</button>
      <br/>
      {this.state.todos.length == 0 ? "No todos yet!" : <ul>{bulletTodos}</ul>}

    </div>
    )

  
}
 
}
  


export default App;
