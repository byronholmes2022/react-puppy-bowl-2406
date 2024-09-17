/* eslint-disable no-unused-vars */
import React from "react";

function Header(props) {
  return (
    <div style={{ color: props.fontColor, fontSize: props.fontSize }}>
      {props.text}
    </div>
  );
}

export default Header;
