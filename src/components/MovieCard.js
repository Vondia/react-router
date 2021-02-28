import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Link to={`/discover/${props.Id}`}>
        <h2>{props.Name}</h2>
      </Link>
      <img src={props.Image} alt="filmpje" />
    </div>
  );
}
