import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styling
import "../css/about.css"

// Images (using Gatsby-Image / GraphQL)
import ImageGlenn from "../components/imageGlenn"


const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Peters" />

    <div className="container" id="about">
      <section aria-label="About Me">
        <div className="item">
          <div className="self-portrait" aria-hidden="true">
            <ImageGlenn alt="Glenn Peters photo" />

            <caption>
              He's right behind me, isn't he?
            </caption>
          </div>
        </div>

        <div className="item">
          <p>
            I am a front end web developer who have worked at 
            big companies like Intel, DSV, and Oracle as well as small to mid-size startups and agencies.  
          </p>
          <p>
            The sites I've worked on I&apos;ve both developed from scratch as well as legacy
            site involving many teams.  I frequently learn new tech on the fly and am devoted 
            to finding the best solutions for both the client and the end user.  
          </p>
          <p>
            Just some examples of what he&apos;s accomplished include: 
            <ul>
              <li>
                A JavaScript SCORM wrapper 
                that allowed the sale of a developed set of courseware to the client when 
                the existing protocols didn&apos;t match the end client's Learning Management System.
              </li>
              <li>
                Updating the intel.com Home page (2021), Download Center content pages (2021), 
                and Contact Support area (2021)
              </li>
              <li>
                Implemented Google Analytics tracking in a micro-reward website, 
                allowing more detailed analysis of user flow.  
              </li>
            </ul>

          </p>          
        </div>
      </section>
{/* 
      <div className="row">
      </div> */}

      <div className="item nav">
        <p className="button">
          <a href="http://portfolio.aenigma.com/" 
            target="_blank" rel="noopener noreferrer"
            className="btn">Go To Portfolio</a>
        </p>

        <p>
          <small>
            Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a> React framework.
          </small>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
