import { Link } from "gatsby"
import React from "react"
import "../styles/header.css"

import raki from "../images/raki.png"
import alexname from "../images/alexname.png"

const Header = () => (
  <header
    style={{
      // marginBottom: `1.45rem`,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={raki} alt="raki"/>
        </Link>
      </div>
      <div className="name">
        <Link to="/">
            <img className="menuIcon" alt="ALEX CADE" src={alexname} />
        </Link>
      </div>
    </div>
  </header>
)

export default Header
