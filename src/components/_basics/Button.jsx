import React from "react";

const Button = ({ onClick = () => null, children, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
