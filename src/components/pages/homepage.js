import React, { Component } from "react";

import Navbar from "./navbar";

export default class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: "",
      title: "",
    };
  }
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
