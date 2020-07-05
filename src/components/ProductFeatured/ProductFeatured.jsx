import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { addNewItem, updateQuantity } from '../../store/actions/cart'

import ProductImage from '../ProductImage/ProductImage'
import Button from '../Button/Button'

class ProductFeatured extends Component {
  constructor(props) {
    super(props)
  }

  handleOnClick = () => {
    const {
      id,
      title,
      filename,
      price,
      addNewItem,
      updateQuantity,
      cart,
    } = this.props
    let newItem

    const hasItemInCart = cart.itens.filter((item) => item.id === id)

    console.log('hasItemInCart', hasItemInCart)

    if (hasItemInCart.length > 0) {
      const { amount } = hasItemInCart[0]
      newItem = {
        id,
        amount: amount + 1,
      }
      console.log('updateItem', newItem)
      updateQuantity(newItem)
    } else {
      newItem = {
        id,
        title,
        filename,
        price,
        amount: 1,
      }
      console.log('newItem', newItem)
      // disparar minha action todo
      addNewItem(newItem)
    }
  }

  render() {
    const {
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
    } = this.props

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
                  onClick={() => this.handleOnClick()}
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
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (value) => dispatch(addNewItem(value)),
    updateQuantity: (value) => dispatch(updateQuantity(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFeatured)
