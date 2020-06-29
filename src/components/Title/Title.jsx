import React from 'react'
import Button from '../Button/Button'

const titlePrimary = (text) => (
  <div className="c-title">
    <div className="c-title__text">
      <h2>{text}</h2>
    </div>
    <div className="c-title__content">
      <Button
        link="/produtos"
        type="primary"
        iconName="IoMdShirt"
        text="Ver todos"
      />
    </div>
  </div>
)

const titleSecondary = (text) => (
  <div className="c-title c-title--secondary">
    <div className="c-title__text">
      <h2>{text}</h2>
    </div>
    <div className="c-title__content">24 produtos</div>
  </div>
)

const Title = ({ text, type }) => {
  return type ? titleSecondary(text) : titlePrimary(text)
}

export default Title
