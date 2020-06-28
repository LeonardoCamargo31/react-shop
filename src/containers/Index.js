import React from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'

import Header from '../components/Header/Header'
import HeaderContent from '../components/HeaderContent/HeaderContent'
import Product from '../components/Product/Product'
import Footer from '../components/Footer/Footer'

const Index = () => {
  return (
    <>
      <Header />
      <Grid>
        <Row>
          <Col sm={12} md={7}>
            <HeaderContent />
          </Col>
        </Row>
      </Grid>

      <Grid>
        <Row>
          <Col sm={12} md={3}>
            <Product />
          </Col>
          <Col sm={12} md={3}>
            <Product />
          </Col>
          <Col sm={12} md={3}>
            <Product />
          </Col>
          <Col sm={12} md={3}>
            <Product />
          </Col>
        </Row>
      </Grid>

      <Footer />
    </>
  )
}

export default Index
