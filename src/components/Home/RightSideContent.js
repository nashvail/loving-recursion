import React from "react"
import { Link } from "gatsby"
import Lottie from "react-lottie"
import { useMediaQuery } from 'react-responsive'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Local imports
import Spacer from "../Spacer"
import Footer from "../Footer"
import heroineImage from "../../assets/images/head.png"
import heroineImage2 from "../../assets/images/head-small.png"
import heroineImagePlacholder from "../../assets/images/head_placeholder.jpg"
import Praise from "./Praise"
import ChapterClicker from "./ChapterClicker"

// Lottie imports
import circleFrontData from "../../lotties/circleExpand.json"
import circleFrontData2 from "../../lotties/circleExpand2.json"

// Icon/Images imports
import donut1 from "../../assets/images/donut-1.svg";

// Data imports
import chapters from "../../data/chapters.json"

// The index section that comes when in tablet or mobile view
export const ResponsiveIndex = () => {

  return (
    <>
      <section className="home-page__right__index-resp">
        <h3 style={{ color: "var(--color-yellow-4)", textAlign: "center" }}>Index</h3>
        {/* Spacer */}
        <Spacer height="sp_lg" />
        <ul style={{ listStyle: "none", margin: "0" }}>
          {chapters.map(({ chapterName, chapterNumber, link, published }) => (
            <ChapterClicker name={chapterName} number={chapterNumber} link={link} published={published} />
          ))}
        </ul>
      </section>
      <Spacer height="sp_xl" />
    </>
  );

}

const ResponsiveHeader = () => {

  // Media queries
  const isPhone = useMediaQuery({ maxWidth: 800 })

  return (
    <section className="home-page__right__header-resp">
      <div className="home-page__right__header-resp__title">
        <span className="home-page__right__header-resp__title__flap" />
        <h1>LOVING RECURSION</h1>
        <Spacer height="sp_sm" />
        <p>A book about learning to love recursion. Written in English and JavaScript</p>
      </div>
      <Spacer height="sp_xl" />
      {!isPhone && <img src={donut1}
        alt="Decorational donut"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-150px'
        }}
      />}
    </section>
  )
}

// Lottie
const CircleExpandLottieFront = ({
  className,
  width,
  height,
  animationData,
}) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className={className}>
      <Lottie
        isStopped={false}
        speed={1}
        options={defaultOptions}
        height={height + "%"}
        width={width + "%"}
      />
    </div>
  )
}

const DesktopHero = () => (
  <>
    <CircleExpandLottieFront
      width={90}
      height={90}
      className="home-page__right__hero__lottie-1"
      animationData={circleFrontData}
    />
    <LazyLoadImage
      alt="Hero image"
      src={heroineImage}
      effect="blur"
      placeholderSrc={heroineImagePlacholder}
      className="home-page__right__hero__desk-heroine"
    />
    <CircleExpandLottieFront
      width={80}
      height={80}
      className="home-page__right__hero__lottie-2"
      animationData={circleFrontData2}
    />
  </>
);

const MobileHero = () => (
  <>
    <img
      alt="Hero Art"
      src={heroineImage2}
      className="home-page__right__hero__mobile-heroine"
    />
  </>
)

// Sections
const MobileContent = () => {
  return (
    <section className="home-page__right">
      <ResponsiveHeader />
      <section className="home-page__right__hero">
        <MobileHero />
      </section>
      <ResponsiveIndex />
      <section className="home-page__right__intro" >
        <h1>
          <span style={{ color: "var(--color-yellow-4)" }}>WHY</span>
          <br /> THE BOOK?
        </h1>
        <Spacer height="sp_lg" />
        <p>
          This book exists because an article about recursion that I was writing quietly sneaked past the respectable word limit of an article, and didn't stop until it was inside the borders of number of words one could expect in a book.
        </p>
        <br/>
        <p>
          See this project as a collection of articles on the same topic, or, a "book", if you wish, it'll only make me feel better. This book is also a test of my ideas on teaching philosophy, which I have come up with after pondering on the topic about 10% more than an average human would. More details about this in the <Link to="/chapter0">Introduction Chapter</Link>.
        </p>
      </section>
      <Spacer height="sp_xxl" />
      <section className="home-page__right__praise" >
        <h1>
          {" "}
          <span style={{ color: "var(--color-yellow-4)" }}>
            A LITTLE
          </span>{" "}
          <br /> BIT OF PRAISE
        </h1>
        <Spacer height="sp_lg" />
        <Praise />
      </section>
      <Spacer height="sp_xl" />
      <Footer />
    </section>
  )
}

const DesktopContent = () => {
  return (
    <section className="home-page__right">
      <section className="home-page__right__hero">
        <DesktopHero />
      </section>
      <section className="home-page__right__intro" >
        <h1>
          <span style={{ color: "var(--color-yellow-4)" }}>WHY</span>
          <br /> THE BOOK?
        </h1>
        <Spacer height="sp_lg" />
        <p>
          This book exists because an article about recursion that I was writing quietly sneaked past the respectable word limit of an article, and didn't stop until it was inside the borders of numbers of words one could expect in a book.
        </p>
        <br/>
        <p>
          See this project as a collection of articles on the same topic, or, a "book", if you wish, it'll only make me feel better. This book is also a test of my ideas on teaching philosophy, which I have come up with after pondering on the topic about 10% more than an average human would. More details about this in the <Link to="/chapter0">Introduction Chapter</Link>.
        </p>
      </section>
      <Spacer height="sp_xxl" />
      <section className="home-page__right__praise" >
        <h1>
          {" "}
          <span style={{ color: "var(--color-yellow-4)" }}>
            A LITTLE
          </span>{" "}
          <br /> BIT OF PRAISE
        </h1>
        <Spacer height="sp_lg" />
        <Praise />
      </section>
      <Spacer height="sp_xl" />
      <Footer />
    </section>
  );
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1280 })
  return isMobile ? children : null
}


const RightSideContent = () => {
  return (
    <>
      <Desktop><DesktopContent /></Desktop>
      <Mobile><MobileContent /></Mobile>
    </>
  )
}


export default RightSideContent
