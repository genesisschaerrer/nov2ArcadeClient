import React, { Component } from "react";

import Navbar from "../../navigation/navbar";

export default class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: "",
      title: "",
    };
  }
  
 

  //make axios get reuquest 
  //.then(data => console.log(data)) update state
  //mapping the data you get back
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
