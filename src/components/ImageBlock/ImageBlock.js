import React from "react";
import "./ImageBlock.css";

const ImageBlock = (props) => (
  <img className="col-md-3 col-sm-4 col-xs-12 pb-4 imageBlock" src={process.env.PUBLIC_URL + "/images/" + props.imageFileName} alt={props.alt} height={props.imageBlockHeight} width={props.imageBlockWidth} onClick={props.clickHandler} />
);

export default ImageBlock;