import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

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
            <Col xs={12} md={3} className="c-header__logo">
              Reactshop
            </Col>

            <a className="c-header__nav-toggle" onClick={this.handleToogle}>
              <div className="c-header__toggle-bar" />
            </a>

            <Col xs={12} md={9} className="c-header__collapse">
              <ul className="c-header__nav">
                <li className="c-header__nav-item">
                  <a className="c-header__nav-link" href="#">
                    Item 1
                  </a>
                </li>
                <li className="c-header__nav-item">
                  <a className="c-header__nav-link" href="#">
                    Item 1
                  </a>
                </li>
                <li className="c-header__nav-item">
                  <a className="c-header__nav-link" href="#">
                    Item 1
                  </a>
                </li>
                <li className="c-header__nav-item">
                  <a className="c-header__nav-link" href="#">
                    Item 1
                  </a>
                </li>
                <li className="c-header__nav-item">
                  <a className="c-header__nav-link" href="#">
                    Item 1
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </header>
    )
  }
}

export default Header
