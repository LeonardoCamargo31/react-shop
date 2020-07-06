import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import Cart from '../Cart/Cart'
import Button from '../Button/Button'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleIsActive: false,
      cartIsOpen: false,
    }

    this.handleToogle = this.handleToogle.bind(this)
    this.handleCart = this.handleCart.bind(this)
  }

  handleCart() {
    const { cartIsOpen } = this.state
    const root = document.querySelector('.c-cart__backdrop')
    const body = document.querySelector('body')

    if (cartIsOpen) {
      body.style.overflow = 'auto'
      root.classList.remove('c-cart__backdrop--open')
      this.setState({ cartIsOpen: false })
    } else {
      body.style.overflow = 'hidden'
      this.setState({ cartIsOpen: true })
      root.classList.add('c-cart__backdrop--open')
    }
  }

  handleToogle() {
    const { toggleIsActive } = this.state
    const toggle = document.querySelector('.c-header__toggle-bar')
    const collapse = document.querySelector('.c-header__collapse')

    if (toggleIsActive) {
      this.setState({ toggleIsActive: false })
      toggle.classList.remove('c-header__toggle-bar--close')
      collapse.classList.remove('c-header__collapse--open')
    } else {
      this.setState({ toggleIsActive: true })
      toggle.classList.add('c-header__toggle-bar--close')
      collapse.classList.add('c-header__collapse--open')
    }
  }

  formatText() {
    const { cartData } = this.props
    const quantityItens = cartData.itens.length
    if (quantityItens === 0) {
      return 'Nenhum item'
    }
    if (quantityItens === 1) {
      return `${quantityItens} item`
    }
    return `${quantityItens} itens`
  }

  render() {
    const { cartIsOpen } = this.state
    return (
      <>
        <Cart isOpen={cartIsOpen} closeCart={this.handleCart} />
        <header className="c-header">
          <Grid>
            <Row>
              <Col sm={12} md={3} className="c-header__logo">
                <Link to="/" title="">
                  Reactshop
                </Link>
              </Col>

              <button
                type="button"
                className="c-header__nav-toggle-button"
                onClick={this.handleToogle}
              >
                <div className="c-header__nav-toggle">
                  <div className="c-header__toggle-bar" />
                </div>
              </button>

              <Col sm={12} md={9} className="c-header__collapse">
                <ul className="c-header__nav">
                  <li className="c-header__nav-item">
                    <Link className="c-header__nav-link" to="/" title="Home">
                      Home
                    </Link>
                  </li>
                  <li className="c-header__nav-item">
                    <a
                      className="c-header__nav-link"
                      href="/sobre"
                      title="Sobre"
                    >
                      Sobre
                    </a>
                  </li>
                  <li className="c-header__nav-item">
                    <Link
                      className="c-header__nav-link"
                      to="/produtos"
                      title="Produtos"
                    >
                      Produtos
                    </Link>
                  </li>
                  <li className="c-header__nav-item">
                    <a
                      className="c-header__nav-link"
                      href="/contato"
                      title="Contato"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
                <div className="c-header__cart">
                  <Button
                    onClick={this.handleCart}
                    type="primary"
                    iconName="IoMdCart"
                    text={this.formatText()}
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </header>
      </>
    )
  }
}

Header.propTypes = {}

// mapeando o state global para minha props
const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
  }
}

export default connect(mapStateToProps, {})(Header)
