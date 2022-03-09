import React from "react";
import "./App.css";

export default function Component(props) {
  const { type } = props;

  return (
    <div>
      <h1>Ini Component yang {type}</h1>
    </div>
  );
}
