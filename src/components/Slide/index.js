import React, { PureComponent } from "react";

import "./style.scss";

class Slide extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("here");
    const inlineStyle = {
      width: this.props.width,
      marginRight: this.props.margin,
    };
    return (
      <div style={inlineStyle} className={"slide"}>
        <div
          className={"slide__image"}
          style={{ backgroundImage: `url(${this.props.img})` }}
        />
        <div className={"slide__info"}>
          <a href={"/"} className={"slide__title"} target={"_blank"}>
            {this.props.title}
          </a>
        </div>
      </div>
    );
  }
}

export default Slide;
