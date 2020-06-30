import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import ProductImage from '../ProductImage/ProductImage'

import Button from '../Button/Button'

const Product = () => {
  return (
    <Grid>
      <div className="c-product-featured">
        <Row>
          <Col sm={12} md={6}>
            <div className="c-product-featured__image">
              <ProductImage image="0.jpg" alt="Produto" />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="c-product-featured__content">
              <h1 className="c-product-featured__title">
                Camisa Real Madrid Home 19/20
              </h1>
              <div className="c-product-featured__price">
                <span className="c-product-featured__price-current">
                  R$ 199.00
                </span>
                <span className="c-product-featured__price-old">R$ 199.00</span>
              </div>
              <div className="c-product-featured__discount">
                Economia de R$ 30,00 (10%)
              </div>

              <p>
                O novo manto Rubro-Negro está pronto para te acompanhar na
                torcida pelo Maior do Brasil. A nova Camisa I do Flamengo
                Torcedor Adidas chega com peso para complementar a sua coleção.
                As faixas um pouco mais finas, contam com grafismos em 3D que
                formam o descritivo Flamengo, para você deixar estampada a sua
                paixão pelo Mengão. Garanta a sua Camisa!
              </p>

              <ul className="c-product-featured__features">
                <li>
                  <b>Cor</b>: Branco
                </li>
                <li>
                  <b>Time</b>: Internacional
                </li>
                <li>
                  <b>Gênero</b>: Masculino
                </li>
                <li>
                  <b>Marca</b>: Adidas
                </li>
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

export default Product
