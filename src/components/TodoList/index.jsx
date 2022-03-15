import React, { Component } from "react";
import Item from "../Item";
export default class List extends Component {
  render() {
    const { todoList, delTodo, finishTodo } = this.props;
    return (
      <div>
        <h5>待完成事项</h5>
        {todoList.map(todo => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              delTodo={delTodo}
              finishTodo={finishTodo}
            />
          );
        })}
      </div>
    );
  }
}
