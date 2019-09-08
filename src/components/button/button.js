import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
 return (
   <button css={props.data.style}>
     {props.data.title}
   </button>
 )
}

Button.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.object,
    title: PropTypes.string
  })
}

Button.defaultProps = {
  data: PropTypes.shape({
    style: {},
    title: ''
  })
}

export default Button;