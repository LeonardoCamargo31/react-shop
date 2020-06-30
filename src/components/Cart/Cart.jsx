/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import Button from '../Button/Button'
import ProductItem from '../ProductItem/ProductItem'

// const renderEmptyCart = () => (
//   <div className="c-cart__empty">
//     <div className="c-cart__empty-icons">
//       <IoMdSad />
//     </div>
//     <div className="c-cart__empty-content">
//       <h4>Seu carrinho está vazio</h4>
//       <p>
//         Adicione produtos clicando no botão <i>“Adicionar ao carrinho”</i> na
//         página de produto.
//       </p>
//     </div>
//   </div>
// )

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

          <div className="c-cart__content">
            <ProductItem />
            <ProductItem />
          </div>
          <div className="c-cart__bottom">
            <div className="c-cart__bottom-total">
              <b>Valor total</b>
              <span> R$ 29,50</span>
            </div>

            <Button
              onClick={closeCart}
              link="/checkout"
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
