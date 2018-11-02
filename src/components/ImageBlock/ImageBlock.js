import React from "react";
import "./ImageBlock.css";

const ImageBlock = (props) => (
  <img className="col-md-3 col-xs-6 p-1" src={require("../../images/" + props.imageFileName)} alt={props.alt} height={props.imageBlockHeight} width={props.imageBlockWidth} onClick={props.clickHandler} />
);

export default ImageBlock;
