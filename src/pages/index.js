import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageGlenn from "../components/imageGlenn"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Peters" />

    {/* container */}
    <div className="">
        <div className="imgBox">
          <ImageGlenn />
        </div>

        <p>
          Glenn is a software developer specializing in web development who’s worked with 
          big companies like Oracle and DSV as well as small to mid-size startups and agencies.  
          He often has to adapt and learn new technologies on the fly, with a particular focus 
          on finding out what will serve both the client and end user.  At Ricochet, he wrote a 
          SCORM Bridge, allowing the sale of a developed set of courseware to the client when 
          the existing protocols didn’t match.  At ARM Insight, he implemented Google Analytics 
          tracking in the reward website.  He’s been instrumental in developing or maintaining 
          many websites, large and small.          
        </p>

        <p className="buttons">
          <a href="http://portfolio.aenigma.com/" 
            target="_blank" rel="noreferrer"
            class="btn">See portfolio</a>
        </p>

        <p>
          Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">Gatsby</a> React framework.
        </p>

      </div>
  </Layout>
)

export default IndexPage
