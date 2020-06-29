import React from 'react'
import PropTypes from 'prop-types'
import * as MaterialDesign from 'react-icons/io'
import { Link } from 'react-router-dom'

const renderIcon = (iconName) => {
  const mdIcon = MaterialDesign[iconName]
  return <span>{React.createElement(mdIcon)}</span>
}

const renderLink = (link, text, iconName, type) => (
  <Link to={link} title={text} className={`c-button c-button--${type}`}>
    {iconName ? renderIcon(iconName) : null}
    {text}
  </Link>
)

const renderButton = (text, iconName, type, onClick) => (
  <button
    onClick={onClick}
    type="button"
    className={`c-button c-button--${type}`}
  >
    {iconName ? renderIcon(iconName) : null}
    {text}
  </button>
)

const Button = ({ onClick, link, text, iconName, type }) => {
  return link
    ? renderLink(link, text, iconName, type)
    : renderButton(text, iconName, type, onClick)
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
