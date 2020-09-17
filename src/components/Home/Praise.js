import React from "react"

// Put all the praise and related links in this object
const praises = [
  {
    text: "I wish Nash taught me Math when I was a kid.",
    workTitle: "How you can use simple Trigonometry to create better loaders",
    workLink: "https://uxdesign.cc/how-you-can-use-simple-trigonometry-to-create-better-loaders-32a573577eb4",
    author: "Andrew Harvard",
  },
  {
    text:
      "Read a maths article, implement it in code within 30mins (didn’t look at your JS code), that rarely happens. A testament to the quality of this article.",
    workTitle: "Nerding out with Bezier Curves",
    workLink: "https://medium.com/free-code-camp/nerding-out-with-bezier-curves-6e3c0bc48e2f",
    author: "Sahil Singh",
  },
  {
    text:
      "This is an amazing tutorial. You explain every single detail in manageable pieces. Even for a Maths idiot like myself, I understood it.",
    workTitle: "How to fix dragging animation in UI with simple Math",
    workLink: "https://uxdesign.cc/how-to-fix-dragging-animation-in-ui-with-simple-math-4bbc10deccf7",
    author: "Charles Robertson",
  },
  {
    text:
      "If Nash taught any other course I'd probably just take it, because I know I would learn something I can put into use right away.",
    workTitle: "A beginner's introduction to Git and GitHub",
    workLink: "https://skl.sh/2riYNbD",
    author: "Hayden B Dennis",
  },
]

const SinglePraise = ({ direction, praiseObject }) => {
  console.log(direction, praiseObject)
  return (
    <li className="home-page__right__rest__praises__praise">
      <div
        className={`home-page__right__rest__praises__praise--text-${direction}`}
      >
        <h3>{`"${praiseObject["text"]}"`}</h3>
        <span>- {praiseObject.author}</span>
      </div>
      <div
        className={`home-page__right__rest__praises__praise--for-${direction}`}
      >
        <div
          className={`home-page__right__rest__praises__praise--for-${direction}__content`}
        >
          <a href={praiseObject.workLink} target="__blank">{praiseObject.workTitle}</a>
        </div>
      </div>
    </li>
  )
}

export default () => {
  return (
    <ul className="home-page__right__rest__praises">
      {praises.map((_, index) => (
        <SinglePraise
          key={index}
          direction={index % 2}
          praiseObject={praises[index]}
        />
      ))}
    </ul>
  )
}
