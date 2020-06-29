/* eslint-disable global-require */
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PropTypes from 'prop-types'
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io'

import Button from '../Button/Button'

const renderCartProduct = () => (
  <div className="c-cart__product-item">
    <div className="c-cart__product-image">
      <LazyLoadImage alt="" src={require(`../../images/0.jpg`)} effect="blur" />
    </div>
    <div className="c-cart__product-content">
      <h3>Nome do produto</h3>
      <div className="c-cart__product-actions">
        <div className="c-cart__product-action-remove">
          <IoIosRemoveCircleOutline />
        </div>
        <div className="c-cart__product-action-amount">4</div>
        <div className="c-cart__product-action-add">
          <IoIosAddCircleOutline />
        </div>
      </div>
    </div>
    <div className="c-product__price">
      <span className="c-product__price-current">R$ 25,50</span>
    </div>
  </div>
)

const Cart = ({ isOpen, closeCart }) => {
  return (
    <>
      <div className="c-cart__backdrop" onClick={closeCart} />
      <div className={`c-cart ${isOpen ? 'c-cart--open' : ''}`}>
        <div className="c-cart__container">
          <div className="c-cart__header">
            <div className="c-cart__header-title">
              <h2>Meu carrinho</h2>
            </div>
            <div className="c-cart__header-content">
              <button type="button" onClick={closeCart}>
                <IoIosCloseCircleOutline />
              </button>
            </div>
          </div>

          <div>
            {renderCartProduct()}
            {renderCartProduct()}
          </div>
          <div className="c-cart__bottom">
            <div className="c-cart__bottom-total">
              <b>Valor total</b>
              <span> R$ 29,50</span>
            </div>

            <Button
              type="primary"
              iconName="IoMdCart"
              text="Finalizar compra"
            />
          </div>
        </div>
      </div>
    </>
  )
}

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
}

export default Cart
