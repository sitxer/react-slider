import React, { Component } from "react";

import Slide from "../Slide";

import "./style.scss";

class SlideWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      itemWidth:
        this.containerRef.current.offsetWidth / this.props.settings.itemsCount -
        (this.props.settings.itemsMargin -
          this.props.settings.itemsMargin / this.props.settings.itemsCount),
    });
  }

  render() {
    return (
      <div className={"wrapper"} ref={this.containerRef}>
        {this.props.items.map(i => (
          <Slide
            width={this.state.itemWidth}
            img={i.img}
            title={i.title}
            margin={this.props.settings.itemsMargin}
          />
        ))}
      </div>
    );
  }
}

export default SlideWrapper;
