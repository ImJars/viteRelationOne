import React from "react";
import ReactRotatingText from "react-rotating-text";

function RotatingText() {
    return (
    <>
      <div>
        <ReactRotatingText items={["first", "second", "third"]} />
      </div>
    </>
  );
}

export default RotatingText;
