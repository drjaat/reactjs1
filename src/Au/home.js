import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'

class home extends Component {
  render() {
    return (
      <div>
        <a>
          <Link to="/firstPage">firstPage</Link>
        </a>
        <ul>
          <li>
            <Link to="/fragment">Fragment</Link>
          </li>
          <li>
            <Link to="/">Router</Link>
          </li>
          <li>
            <Link to="/bootstrap">Bootstrap</Link>
          </li>
          <li>
            <Link to="/css">Css</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          {/* <li>
            <Link to="/fragment">Table</Link>
          </li> */}
          {/* <li>
            <Link to="/fragment">Higher Order Component</Link>
          </li> */}
          <li>
            <Link to="/splitting">Code Splitting</Link>
          </li>
          {/* <li>
            <Link to="/fragment">Context</Link>
          </li> */}
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          {/* <li>
            <Link to="/fragment">Flux Vs Mvc</Link>
          </li> */}
          <li>
            <Link to="/fragment">Redux</Link>
          </li>
          {/* <li>
            <Link to="/fragment">Portals</Link>
          </li> */}
          <li>
            <Link to="/error">Error Boundries</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default home
