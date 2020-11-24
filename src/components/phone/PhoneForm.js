import React, { Component } from "react";

export default class PhoneForm extends Component {
  state = {
    sname: "",
    phonenumber: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();

    this.props.onCreate(this.state);

    this.setState({
      sname: "",
      phonenumber: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.sname}
          onChange={this.handleChange}
          name="sname"
        />
        <input
          placeholder="전화번호"
          value={this.state.phonenumber}
          onChange={this.handleChange}
          name="phonenumber"
        />
        <button type="submit">등록</button>
        <div>{this.state.sname}</div>
        <div>{this.state.phonenumber}</div>
      </form>
    );
  }
}
