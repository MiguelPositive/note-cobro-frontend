import React from "react";

const Loader = ({ color, size }) => {
  return <i className={`bi bi-arrow-clockwise ${color} ${size} animate-spin`}></i>;
};

export default Loader;
