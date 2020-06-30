/* eslint-disable global-require */
import React from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'
import ProductImage from '../ProductImage/ProductImage'

import Button from '../Button/Button'

const HeaderContent = () => {
  return (
    <div className="c-header-content">
      <Grid>
        <Row>
          <Col sm={12} md={8}>
            <div className="c-header-content__content">
              <div>
                <h1>Camisa Barcelona</h1>
                <p>
                  Bata uma bola e garanta presença na resenha com a camisa do
                  Barcelona.
                </p>

                <Button
                  type="primary"
                  iconName="IoIosArrowDroprightCircle"
                  text="Veja produto em destaque"
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="c-header-content__image">
              <ProductImage image="12.jpg" alt="Produto" />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default HeaderContent
