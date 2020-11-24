import React, { Component } from "react";

class MyName extends Component {
  static defaultProps = {
    name: "이름미지정"
  };
  render() {
    return <div>pros {this.props.name} 합니다.</div>;
  }
}

export default MyName;
