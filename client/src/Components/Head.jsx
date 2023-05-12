import React from "react";
import { Helmet } from "react-helmet";

function Head(props) {
  return (
    <div>
      <Helmet>
        <title> {props.title} | Centro Pokemon </title>
        <meta name="description" content="Descripción de mi página" />
        <link rel="canonical" href="https://ejemplo.com" />
      </Helmet>
    </div>
  );
}

export default Head;
