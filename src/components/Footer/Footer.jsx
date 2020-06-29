import React from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'
import { IoLogoInstagram, IoLogoFacebook, IoLogoGithub } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="c-footer">
      <Grid>
        <div className="c-footer__content">
          <Row>
            <Col sm={12} md={3}>
              <div className="c-footer__logo">
                <Link to="/" title="">
                  Reactshop
                </Link>
              </div>
              <p>Você não pode viver sem.</p>
            </Col>
            <Col sm={12} md={3}>
              <h4>Links</h4>
              <ul>
                <li className="footer__nav-item">
                  <Link className="footer__nav-link" to="/" title="">
                    Home
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#" title="">
                    Sobre
                  </a>
                </li>
                <li className="footer__nav-item">
                  <Link className="footer__nav-link" to="/produtos" title="">
                    Produtos
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#" title="">
                    Contato
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={3}>
              <h4>Alguma dúvida?</h4>
              <ul>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#" title="">
                    Termos de Uso
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#" title="">
                    Política de Privacidade
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link" href="#" title="">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={3}>
              <h4>Siga nossas redes</h4>
              <ul className="footer__social">
                <li className="footer__social-item">
                  <a
                    className="footer__social-link"
                    href="https://github.com/LeonardoCamargo31"
                    target="_blank"
                    rel="noreferrer"
                    title=""
                  >
                    <IoLogoInstagram />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    className="footer__social-link"
                    href="https://github.com/LeonardoCamargo31"
                    target="_blank"
                    rel="noreferrer"
                    title=""
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    className="footer__social-link"
                    href="https://github.com/LeonardoCamargo31"
                    target="_blank"
                    rel="noreferrer"
                    title=""
                  >
                    <IoLogoGithub />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Grid>
      <div className="footer__signature">
        <Grid>
          <Row>
            <Col sm={12}>
              Desenvolvido por
              <a
                className="footer__signature-link"
                href="https://github.com/LeonardoCamargo31"
                target="_blank"
                rel="noreferrer"
                title=""
              >
                Leonardo Camargo
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
