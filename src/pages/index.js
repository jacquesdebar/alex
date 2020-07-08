import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="boxy">
      <div className="responsiveEmbed">
        <iframe 
          className="frame"
          title="trippin"
          src="https://www.youtube.com/embed/_nkbEXwouck?controls=0" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default IndexPage
