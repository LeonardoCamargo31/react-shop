import React from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'

import Header from '../components/Header/Header'
import HeaderContent from '../components/HeaderContent/HeaderContent'
import Product from '../components/Product/Product'
import Footer from '../components/Footer/Footer'
import Title from '../components/Title/Title'

import Products from './products.json'

const Index = () => {
  return (
    <>
      <Header />
      <HeaderContent />

      <section className="o-section">
        <Grid>
          <Title text="Produtos em destaque" />
          <Row>
            {Products.map(({ title, price, filename, priceOld }) => (
              <Col sm={12} md={3}>
                <Product
                  title={title}
                  price={price}
                  image={filename}
                  priceOld={priceOld}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </section>

      <Footer />
    </>
  )
}

export default Index
