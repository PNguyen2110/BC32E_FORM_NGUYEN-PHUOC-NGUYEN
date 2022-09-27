import React, { Component } from "react";
import Form from "./Form";
import ThongTin from "./ThongTin";

export default class BTForm extends Component {
  render() {
    return (
      <div className="container mx-auto max-w-7xl">
        <Form />
        <ThongTin />
      </div>
    );
  }
}
