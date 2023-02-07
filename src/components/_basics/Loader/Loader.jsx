import React from "react";
import { Loader as Spinner } from "@mantine/core";

const Loader = ({ isLoading, size = 28, ...props }) => {
  return isLoading ? <Spinner variant="dots" size={size} /> : null;
};

export default Loader;
