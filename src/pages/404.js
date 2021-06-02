import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { navigate } from 'gatsby';
import Helmet from 'react-helmet';


import Footer from "../components/Footer"
import SEO from "../components/seo"

// Import icons
import HomeIcon from "../assets/icons/32x32/home.inline.svg"

// Import image
import heroineFourOFour from "../assets/images/head_404.png"

const GoHomeButton= () => (
  <button type="button" onClick={() => navigate('/')}><HomeIcon /></button>
)

const NotFoundPage = () => (
  <main className="four_o_four">
    <SEO title="404: Not found" />
    <Helmet bodyAttributes={{style: 'background-color : #112D32'}}/>
    <section>
      <div className="art">
        <h1>404</h1>
        <LazyLoadImage
          alt="404Image"
          src={heroineFourOFour}
          effect="blur"
        />
        <p className="art_p_1">
        What you’re looking for could not be found anywhere in the book. 
        </p>
        <p className="art_p_2">
        Leave now and never come back to this page. Okay, that was little rude, sorry!
        </p>
      </div>
      <GoHomeButton/>
      <Footer />
    </section>
  </main>
)

export default NotFoundPage
