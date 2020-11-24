import React, { Component } from "react";
import MyName from "./components/Myname";
import MyNameFunctionTypeCom from "./components/MyNameFunctionTypeCom";
import Counter from "./components/Counter";
import PhoneForm from "./components/phone/PhoneForm";

import ModelerCreator from "./diagramModer/DiagramEditer";

import "./styles.css";

export default class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <h1>CodeSandbox 테스트</h1>
        <MyName name="이름지정" />
        <MyNameFunctionTypeCom name="테스트이름" />
        <Counter />
        <PhoneForm onCreate={this.handleCreate} />
        <ModelerCreator />
      </div>
    );
  }
}
