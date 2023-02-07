import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>This is the home page</div>
      <Link to="about" className="btn btn-primary btn-md">
        About
      </Link>
    </>
  );
}

export default HomePage;
