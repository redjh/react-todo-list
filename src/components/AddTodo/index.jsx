import React, { Component } from "react";

export default class Header extends Component {
  enter = e => {
    const { addTodo } = this.props;
    if (e.keyCode === 13 && e.target.value !== "") {
      addTodo(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <input
        type="text"
        onKeyDown={this.enter}
        placeholder="输入待办事项后，按回车添加"
        style={{ width: "100%", height: "30px" }}
      />
    );
  }
}
