import React from "react";
import "./ImageBlockListing.css";
import ImageBlock from "../ImageBlock";

const ImageBlockListing = (props) => (
	<div className="container">
		<div className="row">
	    {props.images.map((image, index) => {
	      return <ImageBlock key={index} imageFileName={image} alt={image} clickHandler={props.clickHandler}/>
	    })}
	  </div>
  </div>
);

export default ImageBlockListing;