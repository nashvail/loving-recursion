import React from "react"


const SinglePraise = ({ direction }) => (
  <li className="home-page__right__rest__praises__praise">
    <div className={`home-page__right__rest__praises__praise--text-${direction}`}>
      <h2>"I wish Nash Taught me math when I was a kid"</h2>
      <span> - John Doe (Tweet)</span>
    </div>
    <div className={`home-page__right__rest__praises__praise--for-${direction}`}>
      <div className={`home-page__right__rest__praises__praise--for-${direction}__content`}>
        This is where everything will go
      </div>
    </div>
  </li>
)

export default () => {
  return (
    <ul className="home-page__right__rest__praises">
      <SinglePraise direction={0}/>
      <SinglePraise direction={1}/>
      <SinglePraise direction={0}/>
      <SinglePraise direction={1}/>
    </ul>
  )
}
