import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'
import Cards from 'react-credit-cards'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'
import ProductItem from '../components/ProductItem/ProductItem'
import InputText from '../components/InputText/InputText'

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    }
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { cvc, expiry, focus, name, number } = this.state
    return (
      <>
        <Header />

        <section className="o-section">
          <Grid>
            <Title text="Checkout" type="secondary" />
            <Row>
              <Col sm={12} md={5}>
                <Cards
                  cvc={cvc}
                  expiry={expiry}
                  focused={focus}
                  name={name}
                  number={number}
                />
                <form className="o-form">
                  <Row>
                    <Col sm={12} md={12}>
                      <InputText
                        type="tel"
                        name="number"
                        label="Número do Cartão"
                        placeholder="Número do Cartão"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </Col>

                    <Col sm={12} md={12}>
                      <InputText
                        type="text"
                        name="name"
                        label="Nome"
                        placeholder="Nome"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </Col>

                    <Col sm={12} md={6}>
                      <InputText
                        type="text"
                        name="expiry"
                        label="Data de Validade"
                        placeholder="Data de Validade"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </Col>

                    <Col sm={12} md={6}>
                      <InputText
                        type="text"
                        name="cvc"
                        label="Código Segurança (CVV)"
                        placeholder="Código Segurança (CVV)"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </Col>
                  </Row>
                </form>
                <Button
                  type="primary"
                  iconName="IoMdCart"
                  text="Finalizar compra"
                />
              </Col>
              <Col sm={12} md={5} mdOffset={2}>
                <div className="order-total">
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
              </Col>
            </Row>
          </Grid>
        </section>

        <Footer />
      </>
    )
  }
}

export default Checkout
