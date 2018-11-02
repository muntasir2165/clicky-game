import React, { Component } from "react";
import "./Game.css";
import Navbar from "../Navbar";
import Banner from "../Banner";
import ImageBlock from "../ImageBlock";

class Game extends Component {

  state = {
    // images: ["abe.jpg", "barney.jpg", "bart.jpg", "edna.jpg", "homer.png", "lisa.jpg", "maggie.jpg", "marge.jpg", "milhouse.png", "moe.jpg", "mr-burns.jpg", "ned.jpg", "nelson.jpeg", "ralph.png", "skinner.jpg", "wiggum.jpg"],
images: ["alchemist.png", "ant.png", "bart.png", "bee.png", "boy.png", "girl.png", "homer.png", "lisa.png", "man.png", "panther.png", "plane.png", "pony.png", "robot.png", "sunshine.png", "tweety.png", "yoga.png"],
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
      <div>
        <Navbar />
        <Banner />
        <div className="container">
        {this.state.images.map((image, index) => {
          return <ImageBlock key={index} imageFileName={image} alt={image} clickHandler={this.handleClick}/>
        })}
        </div>
      </div>
      );
  }
}

export default Game;
