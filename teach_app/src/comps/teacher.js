import React from "react";

const Teacher = props => {
  return (
    <div className="teachCont">
      <h1 className="teachName">{props.name}</h1>
    </div>
  );
};

export default Teacher;
