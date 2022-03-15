import React, { Component } from "react";
import Item from "../Item";
export default class Footer extends Component {
  render() {
    const { finishedList, redoTodo } = this.props;
    return (
      <div>
        <h5>已完成事项</h5>
        {finishedList.map(f => {
          return <Item key={f.id} todo={f} redoTodo={redoTodo} />;
        })}
      </div>
    );
  }
}
