/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProductImage from '../ProductImage/ProductImage'

const Product = ({ id, title, price, image, priceOld }) => {
  return (
    <div className="c-product">
      <div className="c-product__image">
        <Link to={`/produto/${id}`} title={title}>
          <ProductImage image={image} alt={title} />
        </Link>
      </div>
      <h3>
        <Link to={`/produto/${id}`} title={title}>
          {title}
        </Link>
      </h3>
      <div className="c-product__price">
        <span className="c-product__price-current">R$ {price}</span>
        {priceOld ? (
          <span className="c-product__price-old">R$ {priceOld}</span>
        ) : null}
      </div>
    </div>
  )
}

Product.defaultProps = {
  priceOld: null,
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceOld: PropTypes.number,
}

export default Product
