import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "近藤平",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        {/*<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />*/}
        <Header />
        <Footer />
      </div>
    );
  }
}
