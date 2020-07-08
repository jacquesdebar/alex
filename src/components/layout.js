/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import raki from "../images/raki.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{position: `absolute`, left: `0`, bottom: `0`, width: `100%`}}>
          <hr style={{margin: `0 auto`, padding: `0`, height: `2px`, width: `100px`, backgroundColor: `#333`}}/>
          <div style={{display: `flex`, flexDirection: `row`,justifyContent: `center`, alignItems: `center`, height: `96px`, paddingBottom:`12px`}}>
            <a href="https://www.instagram.com/rakisoundscape/" target="_blank" rel="noreferrer">
              <img src={raki} alt="raki" width="40px" style={{margin: `0`}} />
            </a>
          </div>
          </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
