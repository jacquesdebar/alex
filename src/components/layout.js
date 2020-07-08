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

import { FaSpotify, FaSoundcloud, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

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
          <div style={{display: `flex`, flexDirection: `column`,justifyContent: `center`, alignItems: `center`, minHeight: `96px`, paddingBottom:`12px`}}>
            {/* <a href="https://www.instagram.com/rakisoundscape/" target="_blank" rel="noreferrer">
              <img src={raki} alt="raki" width="40px" style={{margin: `0`}} />
            </a> */}
            <div style={{display:`flex`,flexFlow:`column nowrap`,justifyContent:`center`,alignItems:`center`}}>
            <div style={{width:`300px`, display:`flex`,flexFlow:`row nowrap`,justifyContent:`space-between`,alignItems:`center`, fontSize:`48px`}} >
              <a href="http://instagram.com/alexcade_" style={{color:`#333`}}><FaInstagram size={32} /></a>
              <a href="https://twitter.com/AlexCade_" style={{color:`#333`}}><FaTwitter size={32} /></a>
              <a href="https://www.youtube.com/channel/UCSnZdadARid6EltLdOC8GZg" style={{color:`#333`}}><FaYoutube size={32} /></a>
              <a href="https://open.spotify.com/artist/2V59zAACFhQSmn096tsLTI?si=DBai3Op5QveGprQfBx0vUA" style={{color:`#333`}}><FaSpotify size={32} /></a>
              <a href="https://soundcloud.com/alexcade" style={{color:`#333`}}><FaSoundcloud size={32} /></a>
            </div>
          </div>
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
