import React, { Component } from "react";

import ModelerCreator from "./diagramModer/DiagramEditer";

import "./styles.css";

export default class OnlyDiagramBpmn extends Component {
  handleCreate = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div className="OnlyDiagramBpmn">
        <h1>BPMN Edit 테스트</h1>
        <ModelerCreator />
      </div>
    );
  }
}
