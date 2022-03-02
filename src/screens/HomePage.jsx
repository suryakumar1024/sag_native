import React from "react";
import { Link } from "react-router-dom";
import classes from "./homepage.module.css";

function HomePage() {
  return (
    <div className={classes.mainContainer}>
      <button>
        
        <Link to="item">Item</Link>
      </button>
      <button>
        <Link to="composite-item">Composite item</Link>
      </button>
    </div>
  );
}

export default HomePage;
