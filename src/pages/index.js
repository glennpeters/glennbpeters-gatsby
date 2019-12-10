import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageGlenn from "../components/imageGlenn"
import SEO from "../components/seo"
import "../css/about.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Peters" />

    <div className="container" id="about">
      <section>
        <div className="item">
          <div className="self-portrait">
            <ImageGlenn />

            <caption>
              He's right behind me, isn't he?
            </caption>
          </div>
        </div>

        <div className="item">
          <p>
            Glenn is a front end web developer who’s worked with 
            big companies like Oracle and DSV as well as small to mid-size startups and agencies.  
            He has been instrumental in 
            developing and maintaining many websites, large and small.
            He is proficient at learning new tech on the fly and 
            finding out what will serve both the client and end user.  
          </p>
          <p>
            Just some examples of what he's accomplished include: A JavaScript wrapper 
            that allowed the sale of a developed set of courseware to the client when 
            the existing protocols didn’t match the end client's Learning Management System.  
            At ARM Insight, he implemented Google Analytics 
            tracking in the micro-reward website, allowing more detailed analysis of user flow.  
          </p>          
        </div>
      </section>

      <div className="row">
      </div>

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
