import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

function Buttons() {
  const data = useStaticQuery(
    graphql`
    query ButtonsQuery {
      allButtonsDataJson {
        edges {
          node {
            title
            id
            cssClassName
          }
        }
      }
    }
    `
  );

  const widgetGroupContainer = {
    height: `calc(100vh - 44px)`
  }

  return (
    <div id="buttons" css={widgetGroupContainer}>
      {getAllButtons(data)}
    </div>
  )
}

function getAllButtons(data) {
  const button1 = {
    background: 'red'
  }
  
  const button2 = {
    background: 'blue'
  }

  const button3 = {
    background: 'white'
  }

  const button4 = {
    background: 'black'
  }

  const button5 = {
    background: 'green'
  }

  const commonItemStyle = {
    width: '10rem',
    fontSize: '0.9rem',
    borderRadius: '3px',
    height: '2rem'
  }

  const buttons = [];

  data.allButtonsDataJson.edges.map((item) => {
    let cssClassName = {};
    switch (item.node.cssClassName) {
      case 'button1':
        cssClassName = {...button1};
        break;
      case 'button2':
        cssClassName = {...button2};
        break;
      case 'button3':
        cssClassName = {...button3};
        break;
      case 'button4':
        cssClassName = {...button4};
        break;
      case 'button5':
        cssClassName = {...button5};
      default:
        cssClassName = cssClassName;
    }

    buttons.push(
      <button css={getCss(commonItemStyle, cssClassName)} key={item.node.id}>
        {item.node.title}
      </button>
    )
  })
  return buttons;
}

function getCss(commonClass, itemClass) {
  return {
    ...commonClass,
    ...itemClass
  }
}

export default Buttons;