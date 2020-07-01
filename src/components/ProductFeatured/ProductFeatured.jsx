import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import ProductImage from '../ProductImage/ProductImage'
import Button from '../Button/Button'

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
}

export default ProductFeatured
