import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ProductImage = ({ image, alt }) => {
  const imageSrc = require(`../../images/${image}`)
  return (
    <div className="c-product-image">
      <LazyLoadImage alt={alt} src={imageSrc} effect="blur" />
    </div>
  )
}

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default ProductImage
