import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Col, Row } from 'react-flexbox-grid'
import { ToastContainer } from 'react-toastify'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductFeatured from '../components/ProductFeatured/ProductFeatured'
import Title from '../components/Title/Title'

import Products from './products.json'

class ProductPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      title: '',
      description: '',
      filename: '0.jpg',
      price: 0.0,
      color: '',
      team: '',
      genre: '',
      brand: '',
    }
    this.findProductById = this.findProductById.bind(this)
  }

  componentDidMount() {
    const { match } = this.props
    this.findProductById(match.params.productId)
  }

  componentWillReceiveProps(nextProps) {
    const { productId } = nextProps.match.params
    this.findProductById(productId)
  }

  findProductById(productId) {
    const product = Products.find((item) => {
      if (item.id === parseInt(productId, 10)) {
        return item
      }
      return null
    })
    this.setState({ ...product })
  }

  render() {
    const {
      id,
      title,
      description,
      filename,
      price,
      color,
      team,
      genre,
      brand,
    } = this.state
    return (
      <>
        <Header />
        <ProductFeatured
          id={id}
          title={title}
          description={description}
          filename={filename}
          price={price}
          color={color}
          team={team}
          genre={genre}
          brand={brand}
        />

        <section className="o-section">
          <Grid>
            <Title text="Produtos Relacionados" />
            <Row>
              {Products.map(
                ({ id, title, price, filename, priceOld }, index) => {
                  if (index < 4) {
                    return (
                      <Col sm={12} md={3} key={id}>
                        <Product
                          id={id}
                          title={title}
                          price={price}
                          image={filename}
                          priceOld={priceOld}
                        />
                      </Col>
                    )
                  }
                  return null
                }
              )}
            </Row>
          </Grid>
        </section>
        <Footer />
        <ToastContainer />
      </>
    )
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProductPage
