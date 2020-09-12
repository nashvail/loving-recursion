import React from "react"

// Put all the praise and related links in this object
const praises = [
  {
    text: "I wish Nash taught me Math when I was a kid.",
  },
  {
    text:
      "Came across this today and I don't remember a blog post I had more fun reading.",
  },
]

const SinglePraise = ({ direction, praiseObject }) => {
  console.log(direction, praiseObject);
  return (
    <li className="home-page__right__rest__praises__praise">
      <div
        className={`home-page__right__rest__praises__praise--text-${direction}`}
      >
        <h2>{`"${praiseObject["text"]}"`}</h2>
        <span> - John Doe (Tweet)</span>
      </div>
      <div
        className={`home-page__right__rest__praises__praise--for-${direction}`}
      >
        <div
          className={`home-page__right__rest__praises__praise--for-${direction}__content`}
        >
          This is where everything will go
        </div>
      </div>
    </li>
  )
}

export default () => {
  return (
    <ul className="home-page__right__rest__praises">
      {praises.map((praise, index) => (
        <SinglePraise
          key={index}
          direction={index % 2}
          praiseObject={praises[index]}
        />
      ))}
    </ul>
  )
}
