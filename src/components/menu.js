import React from 'react';

function Menu() {
  const nav = {
    width: `250px`,
    background: `white`,
    borderRight: `1px solid #dadada`,
    height: `100vh`,
    paddingLeft: `35px`,
    paddingTop: `20px`
  }
  const list = {
    listStyle: `none`,
    padding: `0`,
    margin: `20px 0 25px 0`
  };
  const listItem = {
    padding: `0`,
    margin: `0`,
  };
  const listItemLink = {
    display: `block`,
    color: `black`,
    fontSize: `14px`,
    transform: `translateX(0)`,
    textDecoration: `none`,
    transition: `all 0.3s ease-out`,
    ':hover': {
      color: `red`,
      textDecoration: `none`,
      transform: `translateX(5px)`,
    }
  }
  const listTitle = {
    margin: `0`
  }
  return (
    <nav css={nav}>
      <div css={listTitle}>Main List</div>
      <ul css={list}>
        <li css={listItem}><a href="#" css={listItemLink}>Frist Item</a></li>
        <li css={listItem}><a href="#" css={listItemLink}>Second Item</a></li>
        <li css={listItem}><a href="#" css={listItemLink}>Third Item</a></li>
      </ul>
      <div css={listTitle}>Second List</div>
      <ul css={list}>
        <li css={listItem}><a href="#" css={listItemLink}>4th Item</a></li>
        <li css={listItem}><a href="#" css={listItemLink}>5th Item</a></li>
        <li css={listItem}><a href="#" css={listItemLink}>6th Item</a></li>
      </ul>
    </nav>
  )
}

export default Menu;