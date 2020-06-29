import React from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductFeatured from '../components/ProductFeatured/ProductFeatured'
import Title from '../components/Title/Title'

import Products from './products.json'

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductFeatured />

      <section className="o-section">
        <Grid>
          <Title text="Produtos Relacionados" />
          <Row>
            {Products.map(({ title, price, filename, priceOld }, index) => {
              if (index < 4) {
                return (
                  <Col sm={12} md={3}>
                    <Product
                      title={title}
                      price={price}
                      image={filename}
                      priceOld={priceOld}
                    />
                  </Col>
                )
              }
              return null
            })}
          </Row>
        </Grid>
      </section>
      <Footer />
    </>
  )
}

export default ProductPage
