import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Model.css"; 
const Backdrop = (props) => {
  return <div onClick={props.onclick} className="backdrop" />;
};

const Overlay = (props) => {
  return <div className="overlay">{props.children}</div>;
};

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onclick={props.onclick} />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Model;