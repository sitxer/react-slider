import React, { Component } from "react";

import SlideWrapper from "../SlideWrapper";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsCount: 3,
      itemsMargin: 20,
      offsetStep: 1,
      delay: 5000,
    };
  }

  render() {
    const items = [
      {
        img: "https://s3.amazonaws.com/static1.ntvk1.ru/images/placeholder.png",
        title: "Title",
      },
      {
        img: "https://s3.amazonaws.com/static1.ntvk1.ru/images/placeholder.png",
        title: "Title",
      },
      {
        img: "https://s3.amazonaws.com/static1.ntvk1.ru/images/placeholder.png",
        title: "Title",
      },
      {
        img: "https://s3.amazonaws.com/static1.ntvk1.ru/images/placeholder.png",
        title: "Title",
      },
      {
        img: "https://s3.amazonaws.com/static1.ntvk1.ru/images/placeholder.png",
        title: "Title",
      },
    ];

    return (
      <div className="App">
        <SlideWrapper settings={this.state} items={items} />
      </div>
    );
  }
}

export default App;
