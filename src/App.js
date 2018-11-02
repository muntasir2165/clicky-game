import React, { Component } from "react";
import ImageFileNames from "./ImageFileNames";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ImageBlockListing from "./components/ImageBlockListing";
import Footer from "./components/Footer";


class App extends Component {

	// componentDidMount() {
	// 	console.log(ImageFileNames);
	// }

	state = {
    images: ImageFileNames,
    clickedStatus: new Array(ImageFileNames.length).fill(0),
    score: 0,
    topScore: 0,
    feedback: "Click an image to begin!"
  };

  handleClick = event => {
    // console.log(event.target.alt); // example output => alchemist.png
    const clickedImageIndex = this.getClickedImageIndex(event.target.alt);
    console.log("The index is: " + clickedImageIndex);
    // console.log("clickedStatus Before: " + this.state.clickedStatus);
    const clickedStatus = this.state.clickedStatus;
    clickedStatus[clickedImageIndex] = 1;
    // Updating the game's state
    // this.setState({
    // 	clickedStatus
    // });
    console.log("clickedStatus After: " + this.state.clickedStatus);
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
	  		<Navbar score={this.state.score} topScore={this.state.topScore} feedback={this.state.feedback} />
	  		<Banner />
	  		<ImageBlockListing images={this.state.images} clickHandler={this.handleClick} />
	  		<Footer />
  		</div>
  		);
  	}
  }

  export default App;
