import React from 'react'
import PropTypes from 'prop-types'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io'
import ProductImage from '../ProductImage/ProductImage'

const ProductItem = ({ id, title, price, image, amount }) => {
  return (
    <div className="c-product-item">
      <div className="c-product-item__image">
        <ProductImage image={image} alt={title} />
      </div>
      <div className="c-product-item__content">
        <h3>{title}</h3>
        <div className="c-product-item__actions">
          <div className="c-product-item__action-remove">
            <IoIosRemoveCircleOutline />
          </div>
          <div className="c-product-item__action-amount">{amount}</div>
          <div className="c-product-item__action-add">
            <IoIosAddCircleOutline />
          </div>
        </div>
      </div>
      <div className="c-product-item__price">
        <span className="c-product-item__price-current">R$ {price}</span>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
}

export default ProductItem
