import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageGlenn from "../components/imageGlenn"
import SEO from "../components/seo"
import "../css/about.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Peters" />

    <div className="container">
      <div className="row">
        <div className="item">
          <div className="self-portrait">
            <ImageGlenn />
          </div>
        </div>

        <div className="item">
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" 
              target="_blank" rel="noopener noreferrer">Use responsive images and picture set</a> {` `}
              (Note: Gatsby seems to be doing this automatically.)
            </li>
            <li>
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" 
                target="_blank" rel="noopener noreferrer">CSS Tricks: Guide ot Flexbox</a> {` `}
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" 
                target="_blank" rel="noopener noreferrer">MDN: Flexbox</a> {` `}
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" 
                target="_blank" rel="noopener noreferrer">MDN: Basic Concepts of Flexbox</a> {` `}
            </li>
            <li>
              <a href="https://webaim.org/techniques/skipnav/" 
                target="_blank" rel="noopener noreferrer">WebAIM: Skip Navigation</a> {` `}
            </li>
            
          </ul>

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
        </div>
      </div>

      <div className="item nav">
        <p className="buttons">
          <a href="http://portfolio.aenigma.com/" 
            target="_blank" rel="noopener noreferrer"
            class="btn">Go To Portfolio</a>
        </p>

        <p>
          Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a> React framework.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
