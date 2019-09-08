import React from 'react';
import Button from './button/button'

function Intro() {
  const introStyle = {
    paddingTop: `44px`,
    height: `100vh`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    flexDirection: 'column',
    maxWidth: `1000px`,
    width: `70%`,
    textAlign: `center`,
    margin: `auto`
  }

  const headerStyle = {
    fontWeight: `normal`
  }

  const buttonData = {
    style: {
      border: `1px solid black`,
      background: `black`,
      color: `white`,
      borderRadius: `3px`,
      transition: `all 0.15s ease-out`,
      width: `10rem`,
      height: `2.5rem`,
      cursor: 'pointer',
      textTransform: `uppercase`,
      ':hover': {
        transform: `translateY(-3px)`,
        boxShadow: `rgba(0, 0, 0, 0.16)
        0px 4px 14px 0px`
      }
    },
    title: 'Explore'
  }

  return (
    <div css={introStyle}>
        <h1 css={headerStyle}>Simple UI Views made in React</h1>
        <span>(in progress)</span>
        <p>I have created this project using Gatsby.
        This contains collection of simple react views/components/widgets which you can use with or without any modification in your project.</p>
        <Button data={buttonData}/>
    </div>
  )
}

export default Intro;