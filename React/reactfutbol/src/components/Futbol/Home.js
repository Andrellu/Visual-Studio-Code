import React, { Component } from "react";
import imagen from "./../../assets/images/home.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          <img style={{ width: "100%", height: "100%" }} src={imagen} />
        </h1>
      </div>
    );
  }
}
