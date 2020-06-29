/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const Product = ({ title, price, image, priceOld }) => {
  return (
    <div className="c-product">
      <div className="c-product__image">
        <Link to="/produto" title="">
          <LazyLoadImage
            alt=""
            src={require(`../../images/${image}`)}
            effect="blur"
          />
        </Link>
      </div>
      <h3>
        <Link to="/produto" title="">
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
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceOld: PropTypes.string,
}

export default Product
