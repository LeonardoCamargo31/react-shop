import React from 'react'
import PropTypes from 'prop-types'
import * as MaterialDesign from 'react-icons/io'

const renderIcon = (iconName) => {
  const mdIcon = MaterialDesign[iconName]
  return <span>{React.createElement(mdIcon)}</span>
}

const Button = ({ text, iconName, type }) => {
  return (
    <button type="button" className={`c-button c-button--${type}`}>
      {iconName ? renderIcon(iconName) : null}
      {text}
    </button>
  )
}

Button.defaultProps = {
  iconName: null,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconName: PropTypes.string,
}

export default Button
