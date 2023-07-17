import React, { useState } from "react";
import { Rating } from "@mui/material";

const Rate = ({num}) => {
  const [rate, setRate] = useState(0);
  const [show, setShow] = useState(false);
console.log(num)
  const handleRate = () => {
    console.log(`rating is: ${rate}`);
  };
  const handleShow = () => {
    setShow((show) => !show);
  };
  return (
    <div className="d-flex" style={{marginTop:'.4rem'}}>
      <Rating value={num} readOnly />
    </div>
  );
};

export default Rate;
