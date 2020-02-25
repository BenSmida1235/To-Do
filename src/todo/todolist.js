import React, { Component } from "react";
import "./todo.css";

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: []
    };
  }
  onChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };
  addTodo = event => {
    event.preventDefault();
    this.setState({
      userInput: "",
      items: [
        ...this.state.items,
        { id: Date.now(), desc: this.state.userInput, isComplete: false }
      ]
    });
  };
  deleteTodo = event => {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);
    array.splice(index, 1);
    this.setState({
      itmes: array
    });
  };
  //eslint-disable-next-line
  completeTodo = id =>
    this.setState({
      items: this.state.items.map(el =>
        el.id == id ? { ...el, isComplete: true } : el
      )
    });
  renderTodos() {
    return this.state.items.map(item => {
      return (
        <div key={item.id}>
          <span className={item.isComplete ? "undo" : ""}>{item.desc}</span>
          <button onClick={this.deleteTodo}>Delete</button>
          <button onClick={() => this.completeTodo(item.id)}>{item.isComplete?"undo":"complete"}</button>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="list-group-item">
        <h1>TO-DO App!</h1>
        <form className="form-row align-items-center">
          <input
            value={this.state.userInput}
            type="text"
            placeholder="enter new task"
            onChange={this.onChange}
            className="form-control mb-2"
          />
          <button onClick={this.addTodo} className="btn btn-primary">
            Add
          </button>
        </form>
        <div className="list-group">{this.renderTodos()}</div>
      </div>
    );
  }
}
export default Todolist;
