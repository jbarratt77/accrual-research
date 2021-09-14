import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import JobRoll from '../components/JobRoll'
import Hero from "../components/Hero"
import "./index-page.css"
import ContactForm from "../components/ContactForm"

export const IndexPageTemplate = ({
  about,
  product1,
  product2,
  product3,
  product4,
  consulting,
  careers,
}) => (
  <>
    <div id="about" className="container about">
      <div className="inner">
        <div>
          <h1>{about.heading}</h1>
        </div>
        <div>
          <p>{about.text}</p>
        </div>
        <div className="spacer">

        </div>
        <div>
          <button>Contact</button>
        </div>
      </div>
    </div>

    <div id="products" className="container explore">
      <div className="inner">
        <div className="exploreText">
          <div style={{width:"100%",height:"40%"}}></div>
          <h1 style={{margin: 0}}>Explore</h1>
          <h1>Our Products</h1>
        </div>
      </div>
    </div>

    <div className="container product pulsebot">
      <div className="inner">
        <div className="item"></div>
        <div className="item">
          <h1>{product1.heading}</h1>
          <p>{product1.text}</p>
        </div>
      </div>
    </div>

    <div className="product container chainpulse" style={{backgroundColor: "black"}}>
      <div className="inner">
        <div className="item" style={{color: "white"}}>
          <h1>{product2.heading}</h1>
          <p>{product2.text}</p>
        </div>
        <div className="item"></div>
      </div>
    </div>

    <div id="consulting" className="consulting container">
      <div className="inner">

        <div className="row">
          <h1>Consulting with Perspective</h1>
        </div>
        <div className="row">
          <div className="column" style={{flexBasis: "10%"}}>
            
          </div>
          <div className="column" style={{flexBasis: "90%"}}>
            <div className="item">
              <h2>{consulting.heading1}</h2>
            </div>
            <div className="item">
              <p>{consulting.text1}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column" style={{flexBasis: "10%"}}>

          </div>
          <div className="column" style={{flexBasis: "90%"}}>
            <div className="item">
              <h2>{consulting.heading2}</h2>
            </div>
            <div className="item">
              <p>{consulting.text2}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column" style={{flexBasis: "10%"}}>

          </div>
          <div className="column" style={{flexBasis: "90%"}}>
            <div className="item">
              <h2>{consulting.heading3}</h2>
            </div>
            <div className="item">
              <p>{consulting.text3}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column" style={{flexBasis: "10%"}}>

          </div>
          <div className="column" style={{flexBasis: "90%"}}>
            <div className="item">
              <h2>{consulting.heading4}</h2>
            </div>
            <div className="item">
              <p>{consulting.text4}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="careers" className="careers container">
      <div className="inner">
        <h1>{careers.heading}</h1>
        <p>{careers.text}</p>
        <JobRoll />
      </div>
    </div>

    <div id="contact" className="contact container">
      <div className="inner">
        <ContactForm />
      </div>
    </div>
  </>
)

IndexPageTemplate.propTypes = {
  about: PropTypes.object,
  product1: PropTypes.object,
  product2: PropTypes.object,
  product3: PropTypes.object,
  product4: PropTypes.object,
  consulting: PropTypes.object,
  careers: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Hero />
      <IndexPageTemplate
        about={frontmatter.about}
        product1={frontmatter.product1}
        product2={frontmatter.product2}
        product3={frontmatter.product3}
        product4={frontmatter.product4}
        consulting={frontmatter.consulting}
        careers={frontmatter.careers}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        about {
          heading
          text
        }
        product1 {
          heading
          text
        }
        product2 {
          heading
          text
        }
        product3 {
          heading
          text
        }
        product4 {
          heading
          text
        }
        consulting {
          heading1
          text1
          heading2
          text2
          heading3
          text3
          heading4
          text4
        }
        careers {
          heading
          text
        }
      }
    }
  }
`