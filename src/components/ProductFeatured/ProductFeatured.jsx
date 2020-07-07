import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import { connect } from 'react-redux'
import {
  actionAddNewItem,
  actionUpdateQuantity,
} from '../../store/actions/cart'

import ProductImage from '../ProductImage/ProductImage'
import Button from '../Button/Button'

const notify = () =>
  toast.success('Produto adicionado ao carrinho!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

const handleOnClick = (
  id,
  title,
  filename,
  price,
  addNewItem,
  updateQuantity,
  cartData
) => {
  const hasItemInCart = cartData.itens.filter((item) => item.id === id)

  if (hasItemInCart.length > 0) {
    const { amount } = hasItemInCart[0]
    const item = {
      id,
      amount: amount + 1,
    }
    updateQuantity(item)
    notify()
  } else {
    const item = {
      id,
      title,
      filename,
      price,
      amount: 1,
    }
    // disparar minha action todo
    addNewItem(item)
    notify()
  }
}

const ProductFeatured = ({
  id,
  title,
  price,
  filename,
  priceOld,
  description,
  color,
  team,
  genre,
  brand,
  addNewItem,
  updateQuantity,
  cartData,
}) => {
  return (
    <Grid>
      <div className="c-product-featured">
        <Row>
          <Col sm={12} md={6}>
            <div className="c-product-featured__image">
              <ProductImage image={filename} alt={title} />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="c-product-featured__content">
              <h1 className="c-product-featured__title">{title}</h1>
              <div className="c-product-featured__price">
                <span className="c-product-featured__price-current">
                  R$ {price}
                </span>
                {priceOld && (
                  <span className="c-product-featured__price-old">
                    R$ {priceOld}
                  </span>
                )}
              </div>
              <div className="c-product-featured__discount">
                Economia de R$ 30,00 (10%)
              </div>

              <p>{description}</p>

              <ul className="c-product-featured__features">
                {color && (
                  <li>
                    <b>Cor</b>: {color}
                  </li>
                )}
                {team && (
                  <li>
                    <b>Time</b>: {team}
                  </li>
                )}
                {genre && (
                  <li>
                    <b>Gênero</b>: {genre}
                  </li>
                )}
                {brand && (
                  <li>
                    <b>Marca</b>: {brand}
                  </li>
                )}
              </ul>

              <Button
                onClick={() =>
                  handleOnClick(
                    id,
                    title,
                    filename,
                    price,
                    addNewItem,
                    updateQuantity,
                    cartData
                  )
                }
                type="primary"
                iconName="IoIosAddCircle"
                text="Adicionar ao carrinho"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Grid>
  )
}

ProductFeatured.defaultProps = {
  priceOld: null,
  color: null,
  team: null,
  genre: null,
  brand: null,
}

ProductFeatured.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceOld: PropTypes.number,
  color: PropTypes.string,
  team: PropTypes.string,
  genre: PropTypes.string,
  brand: PropTypes.string,
  addNewItem: PropTypes.func.isRequired,
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
    addNewItem: (value) => dispatch(actionAddNewItem(value)),
    updateQuantity: (value) => dispatch(actionUpdateQuantity(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFeatured)
