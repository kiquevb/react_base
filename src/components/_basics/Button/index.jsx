import React from "react";
import "./style.scss";

const Button = ({ onClick = () => null, children, ...rest }) => {
  return (
    <button className="my-button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
