import React from 'react';
import { useStaticQuery, graphql } from "gatsby"


function Menu() {
  const data = useStaticQuery(
    graphql`
    query MenuItemsQuery {
      allMenuDataJson {
        edges {
          node {
            name
            id
            title
          }
        }
      }
    }
    
    `
  );

  const nav = {
    width: `250px`,
    background: `white`,
    borderRight: `1px solid #dadada`,
    height: `100vh`,
    paddingLeft: `35px`,
    paddingTop: `20px`,
    overflowY: `auto`,
    overflowX: `hidden`,
    position: `fixed`,
    top: `44px`,
    zIndex: `0`
  }

  const list = {
    listStyle: `none`,
    padding: `0`,
    margin: `20px 0 25px 0`
  };

  const listTitle = {
    margin: `0`
  }

  return (
    <nav css={nav}>
      <div css={listTitle}>Common</div>
      <ul css={list}>
        {getMenuItems(data)}
      </ul>
    </nav>
  )
}

function getMenuItems(data) {
 const menuItemArr = [];
 const listItem = {
  padding: `0`,
  margin: `0`,
};

const listItemLink = {
  display: `block`,
  color: `black`,
  transform: `translateX(0)`,
  textDecoration: `none`,
  transition: `all 0.3s ease-out`,
  fontSize: `0.9rem`,
  ':hover': {
    color: `red`,
    textDecoration: `none`,
    transform: `translateX(5px)`,
  }
}
 data.allMenuDataJson.edges.forEach((item) => {
  menuItemArr.push(
    <li
      css={listItem}
      key={item.node.id}>
      <a
        href={`#${item.node.id}`}
        css={listItemLink}>
        {item.node.title}
      </a>
    </li>
  )
 });
 return menuItemArr;
}

export default Menu;