import React, { Component } from "react";
import ImageFileNames from "./ImageFileNames";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ImageBlockListing from "./components/ImageBlockListing";
import Footer from "./components/Footer";


class App extends Component {
	state = {
    imageFileNames: ImageFileNames,
    clickedImages: [],
    score: 0,
    topScore: 0,
    feedback: "Click an image to begin!"
  };

  componentDidMount() {
    this.setState({
      imageFileNames: this.shuffle(this.state.imageFileNames)
    }, () => {
      console.log("Shuffled the images on game start");
    });
  }

  handleClick = event => {
    // console.log(event.target); // example output => <img class="col-md-3 col-sm-4 col-xs-12 pb-4 imageBlock" src="/static/media/alchemist.ce4808c0.png" alt="alchemist.png">
    // console.log(event.target.alt); // example output => alchemist.png
    const clickedImageFileName = event.target.alt;
    // console.log("The clicked image is: " + clickedImageFileName);
    // console.log("state BEFORE: " + JSON.stringify(this.state));
    const wasImageClickedBefore = this.imageClickedBefore(clickedImageFileName);
    if (wasImageClickedBefore) {
      const newTopScore = (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore;
      this.setState({
        imageFileNames: this.shuffle(this.state.imageFileNames),
        clickedImages: [],
        score: 0,
        topScore: newTopScore,
        feedback: "Game Over! You Guessed The Same Image Twice!"
      }, () => {
        // console.log("IF block state AFTER GAME OVER: " + JSON.stringify(this.state));
      });
    } else {
      let newScore = this.state.score + 1;
      if (newScore === this.state.imageFileNames.length) {
        const newTopScore = this.state.imageFileNames.length;
        this.setState({
          imageFileNames: this.shuffle(this.state.imageFileNames),
          clickedImages: [],
          score: 0,
          topScore: newTopScore,
          feedback: "Congrats! You Have Guessed ALL The Same Images Correctly!"
          }, () => {
          // console.log("IF block state AFTER GAME WIN: " + JSON.stringify(this.state));
        });
      } else {
        const clickedImagesCopy = this.state.clickedImages.slice();
        clickedImagesCopy.push(clickedImageFileName);
        this.setState({
          imageFileNames: this.shuffle(this.state.imageFileNames),
          clickedImages: clickedImagesCopy,
          score: newScore,
          feedback: "Yes! You Guessed The Image Correctly!"
          }, () => {
          // console.log("IF block state AFTER CORRECT GUESS: " + JSON.stringify(this.state));
        });
      }
    }
  };

  imageClickedBefore = (clickedImageFileName) => {
  	for (let index=0; index<this.state.clickedImages.length; index++) {
  		if (this.state.clickedImages[index] === clickedImageFileName) {
        return true;
      }
    }
    return false;
  };

  // Fisher-Yates (aka Knuth) Shuffle algorithm implementation to shuffle images to display in the UI
  // Copied from stackoverflow post:
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
   return (
    <div>
      <Navbar score={this.state.score} topScore={this.state.topScore} feedback={this.state.feedback} />
      <Banner />
      <ImageBlockListing imageFileNames={this.state.imageFileNames} clickHandler={this.handleClick} />
      <Footer />
    </div>
    );
  }
}

export default App;
