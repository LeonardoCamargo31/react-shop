import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleIsActive: false,
    }

    this.handleToogle = this.handleToogle.bind(this)
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

  render() {
    return (
      <header className="c-header">
        <Grid>
          <Row>
            <Col sm={12} md={3} className="c-header__logo">
              <Link to="/" title="">
                Reactshop
              </Link>
            </Col>

            <a className="c-header__nav-toggle" onClick={this.handleToogle}>
              <div className="c-header__toggle-bar" />
            </a>

            <Col sm={12} md={9} className="c-header__collapse">
              <ul className="c-header__nav">
                <li className="c-header__nav-item">
                  <Link className="c-header__nav-link" to="/" title="">
                    Home
                  </Link>
                </li>
                <li className="c-header__nav-item">
                  <a className="c-header__nav-link" href="#">
                    Sobre
                  </a>
                </li>
                <li className="c-header__nav-item">
                  <Link className="c-header__nav-link" to="/produtos" title="">
                    Produtos
                  </Link>
                </li>
                <li className="c-header__nav-item">
                  <a className="c-header__nav-link" href="#">
                    Contato
                  </a>
                </li>
              </ul>
              <div className="c-header__cart">
                <Button
                  type="primary"
                  iconName="IoMdCart"
                  text="Nenhum produto"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    )
  }
}

export default Header
