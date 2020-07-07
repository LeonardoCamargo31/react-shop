import React from 'react'
import PropTypes from 'prop-types'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io'

import { connect } from 'react-redux'
import { actionUpdateQuantity } from '../../store/actions/cart'

import ProductImage from '../ProductImage/ProductImage'

const addItem = (idProduct, updateQuantity, cartData) => {
  const hasItemInCart = cartData.itens.filter((item) => item.id === idProduct)

  if (hasItemInCart.length > 0) {
    const { amount } = hasItemInCart[0]
    const item = {
      id: idProduct,
      amount: amount + 1,
    }
    updateQuantity(item)
  }
}

const removeItem = (idProduct, updateQuantity, cartData) => {
  const hasItemInCart = cartData.itens.filter((item) => item.id === idProduct)

  if (hasItemInCart.length > 0) {
    const { amount } = hasItemInCart[0]
    if (amount > 0) {
      const item = {
        id: idProduct,
        amount: amount - 1,
      }
      updateQuantity(item)
    }
  }
}

const ProductItem = ({
  id,
  title,
  price,
  image,
  amount,
  updateQuantity,
  cartData,
}) => {
  return (
    <div className="c-product-item">
      <div className="c-product-item__image">
        <ProductImage image={image} alt={title} />
      </div>
      <div className="c-product-item__content">
        <h3>{title}</h3>
        <div className="c-product-item__actions">
          <button
            type="button"
            onClick={() => removeItem(id, updateQuantity, cartData)}
            className="c-product-item__action-remove"
          >
            <IoIosRemoveCircleOutline />
          </button>
          <div className="c-product-item__action-amount">{amount}</div>
          <button
            type="button"
            onClick={() => addItem(id, updateQuantity, cartData)}
            className="c-product-item__action-add"
          >
            <IoIosAddCircleOutline />
          </button>
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
  updateQuantity: PropTypes.func.isRequired,
  cartData: PropTypes.shape({
    itens: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        filename: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (value) => dispatch(actionUpdateQuantity(value)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
