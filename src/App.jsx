import "./App.css";
import Footer from "./components/FinishedList";
import Header from "./components/AddTodo";
import List from "./components/TodoList";

import { Component } from "react";

export default class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        name: "学习Vue",
        checked: false,
      },
      {
        id: 2,
        name: "学习React",
        checked: false,
      },
      {
        id: 3,
        name: "学习Node.js",
        checked: false,
      },
    ],
    finishedList: [
      {
        id: 4,
        name: "看书",
        checked: true,
      },
      {
        id: 5,
        name: "练书法",
        checked: true,
      },
    ],
  };

  delItem(target, arr) {
    const index = arr.indexOf(target);
    arr.splice(index, 1);
  }
  //添加todo事项
  addTodo = value => {
    const { todoList } = this.state;
    todoList.unshift({
      id: Math.random(),
      checked: false,
      name: value,
    });
    this.setState({ todoList });
  };
  //删除todo事项
  delTodo = todo => {
    const { todoList } = this.state;
    this.delItem(todo, todoList);
    this.setState({ todoList });
  };
  //完成todo事项
  finishTodo = todo => {
    const { finishedList, todoList } = this.state;
    finishedList.push(todo);
    this.delItem(todo, todoList);
    this.setState({ todoList, finishedList });
  };
  //重做todo事项
  redoTodo = todo => {
    const { finishedList, todoList } = this.state;
    todo.checked = false;
    todoList.unshift(todo);
    this.delItem(todo, finishedList);
    this.setState({ todoList, finishedList });
  };
  render() {
    const { todoList, finishedList } = this.state;
    return (
      <div className="app">
        <h2>TodoList列表</h2>
        <Header addTodo={this.addTodo} />
        <List todoList={todoList} delTodo={this.delTodo} finishTodo={this.finishTodo} />
        <hr />
        <Footer finishedList={finishedList} redoTodo={this.redoTodo}/>
      </div>
    );
  }
}
