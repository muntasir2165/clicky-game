import React, { Component } from "react";
import "./Game.css";
import ImageBlock from "../ImageBlock";

class Game extends Component {

  state = {
   // images: ["abe.jpg, "barney.jpg, "bart.jpg, "edna.jpg, "homer.png, "lisa.jpg, "maggie.jpg, "marge.jpg, "milhouse.png, "moe.jpg, "mr-burns.jpg, "ned.jpg, "nelson.jpeg, "ralph.png, "skinner.jpg, "wiggum.jpg],
    images: ["abe.jpg", "barney.jpg", "bart.jpg", "edna.jpg", "homer.png", "lisa.jpg", "maggie.jpg", "marge.jpg", "milhouse.png", "moe.jpg", "mr-burns.jpg", "ned.jpg", "nelson.jpeg", "ralph.png", "skinner.jpg", "wiggum.jpg"],
    clickedStatus: new Array(16).fill(0),
    score: 0,
    highestScore: 0
 };

  handleClick = event => {
    // console.log(event);
    // console.log(event.target);
    console.log(event.target.alt); // => abe.jpg
    const clickedImageIndex = this.getClickedImageIndex(event.target.alt);
    console.log("The index is: " + clickedImageIndex);
    // console.log("clickedStatus Before: " + this.state.clickedStatus);
    const clickedStatus = this.state.clickedStatus;
    clickedStatus[clickedImageIndex] = 1;
    // let newClickedStatus = this.state.clickedStatus.slice();
    // console.log("newClickedStatus Before: " + newClickedStatus);
    // newClickedStatus[imageIndex] = 1;
    // console.log("newClickedStatus After: " + newClickedStatus);
    // Updating the game's state
    this.setState({
      clickedStatus
    });
    // console.log("clickedStatus After: " + this.state.clickedStatus);
  };

  getClickedImageIndex = (imageFileName) => {
    for (let index=0; index<this.state.images.length; index++) {
      if (this.state.images[index] === imageFileName) {
        // console.log("The index is: " + index);
        // break;
        return index;
      }
    }
  };

  render() {
    return (
      <div className="container">
      {this.state.images.map((image, index) => {
        return <ImageBlock key={index} imageFileName={image} alt={image} imageBlockHeight="112" imageBlockWidth="40" clickHandler={this.handleClick}/>
      })}
      </div>
      );
  }
}

export default Game;
