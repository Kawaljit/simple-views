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
      {getButtons(data)}
    </div>
  )
}

function getButtons(data) {
  const buttonArr = [];
  data.allButtonsDataJson.edges.forEach((item) => {
    buttonArr.push(
     <button key={item.node.id}>
       {item.node.title}
     </button>
   )
  });
  return buttonArr;
 }

export default Buttons;