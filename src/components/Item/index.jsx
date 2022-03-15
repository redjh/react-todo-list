import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  check = (e, todo) => {
    const { finishTodo } = this.props;
    console.log(e.target.checked, todo);
    if (e.target.checked) {
      todo.checked = true;
      finishTodo(todo);
    }
  };
  render() {
    const { todo, delTodo, redoTodo } = this.props;
    let btn;
    let pre;

    if (todo.checked) {
      pre = <span className="finished"> √ </span>;
      btn = (
        <button className="redo-btn" onClick={() => redoTodo(todo)}>
          重做
        </button>
      );
    } else {
      pre = <input type="checkbox" onClick={e => this.check(e, todo)} />;
      btn = (
        <button className="del-btn" onClick={() => delTodo(todo)}>
          删除
        </button>
      );
    }
    return (
      <div className="item">
        {pre}
        <span>{todo.name}</span>
        {btn}
      </div>
    );
  }
}
