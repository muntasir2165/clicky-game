import React, { Component } from "react";
import "./Game.css";
import ImageBlock from "../ImageBlock";

class Game extends Component {

  state = {
   images: [{imageFileName: "abe.jpg", isClicked: 0}, {imageFileName: "barney.jpg", isClicked: 0}, {imageFileName: "bart.jpg", isClicked: 0}, {imageFileName: "edna.jpg", isClicked: 0}, {imageFileName: "homer.png", isClicked: 0}, {imageFileName: "lisa.jpg", isClicked: 0}, {imageFileName: "maggie.jpg", isClicked: 0}, {imageFileName: "marge.jpg", isClicked: 0}, {imageFileName: "milhouse.png", isClicked: 0}, {imageFileName: "moe.jpg", isClicked: 0}, {imageFileName: "mr-burns.jpg", isClicked: 0}, {imageFileName: "ned.jpg", isClicked: 0}, {imageFileName: "nelson.jpeg", isClicked: 0}, {imageFileName: "ralph.png", isClicked: 0}, {imageFileName: "skinner.jpg", isClicked: 0}, {imageFileName: "wiggum.jpg", isClicked: 0}]
 };

  handleClick = event => {
    // console.log(event);
    // console.log(event.target);
    console.log(event.target.alt); // => abe.jpg
    this.getImageIndex(event.target.alt);
    // // Updating the input's state
    // this.setState({
    //   [name]: value
    // });
  };

  getImageIndex = (imageFileName) => {
    for (let index=0; index<this.state.images.length; index++) {
      if (this.state.images[index].imageFileName === imageFileName) {
        console.log("The index is: " + index);
        break;
      }
    }
  };

  render() {
    return (
      <div className="container">
      {this.state.images.map((image, index) => {
        return <ImageBlock key={index} imageFileName={image.imageFileName} alt={image.imageFileName} imageBlockHeight="112" imageBlockWidth="40" clickHandler={this.handleClick}/>
      })}
      </div>
      );
  }
}

export default Game;
