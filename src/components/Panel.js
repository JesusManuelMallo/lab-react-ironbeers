import React from "react";
import {Link} from "react-router-dom"

function Panel(props) {
    const {image,name,link} = props.panels

    return (
      <div className="Panel">
       <img src={image} alt="" />
        <Link to={link}>
       <h1>{name}</h1>
       </Link>

       <p>Popular beers from around the world</p>
      </div>
    );
  }
  
  export default Panel;