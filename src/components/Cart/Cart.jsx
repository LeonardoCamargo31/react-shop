/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import { IoIosCloseCircleOutline, IoMdSad } from 'react-icons/io'

import { connect } from 'react-redux'
import { actionClearCart } from '../../store/actions/cart'

import Button from '../Button/Button'
import ProductItem from '../ProductItem/ProductItem'

const renderEmptyCart = () => (
  <div className="c-cart__empty">
    <div className="c-cart__empty-icons">
      <IoMdSad />
    </div>
    <div className="c-cart__empty-content">
      <h4>Seu carrinho está vazio</h4>
      <p>
        Adicione produtos clicando no botão <i>“Adicionar ao carrinho”</i> na
        página de produto.
      </p>
    </div>
  </div>
)

const sumTotalValue = (itens) => {
  let totalValue = 0
  itens.forEach((item) => {
    totalValue += item.price * item.amount
  })
  return totalValue
}

const Cart = ({ isOpen, closeCart, cartData, clearCart }) => {
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

          <div className="c-cart__content">
            {cartData.itens.length === 0 && renderEmptyCart()}

            {cartData.itens.map((item) => (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.filename}
                amount={item.amount}
              />
            ))}
          </div>
          <div className="c-cart__bottom">
            <div className="c-cart__bottom-total">
              <b>Valor total</b>
              <span> R$ {sumTotalValue(cartData.itens)}</span>
            </div>
            <div className="c-cart__actions">
              <Button
                onClick={closeCart}
                link="/checkout"
                type="primary"
                iconName="IoMdCart"
                text="Finalizar"
              />
              <Button
                onClick={clearCart}
                type="secondary"
                iconName="IoIosTrash"
                text="Limpar"
              />
            </div>
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

const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actionClearCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
