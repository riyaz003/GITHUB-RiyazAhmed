import React, { Component } from "react";

class StyledComponent extends Component {
  render() {
    // Inline styles for the heading and paragraph
    const headerStyle = {
      color: "blue",
      textAlign: "center",
      fontSize: "2.5rem",
      marginTop: "20px",
    };

    const paragraphStyle = {
      color: "solid black",
      fontSize: "1.2rem",
      lineHeight: "1.8",
      margin: "20px",
      textAlign: "justify",
    };

    return (
      <div>
        <h1 style={headerStyle}>Hello Students</h1>
        <p style={paragraphStyle}>
          React's key feature is its ability to build reusable UI components,
          which helps in developing powerful interactive applications with optimal
          performance. Dive into the world of front-end development with our
          comprehensive free online certification course on React JS.
        </p>
      </div>
    );
  }
}

export default StyledComponent;
