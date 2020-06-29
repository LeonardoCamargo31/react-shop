import React from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import Title from '../components/Title/Title'

import Products from './products.json'

const AllProducts = () => {
  return (
    <>
      <Header />

      <section className="o-section">
        <Grid>
          <Title text="Todos os produtos" type="secondary" />
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

export default AllProducts
