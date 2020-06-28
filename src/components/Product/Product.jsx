import React from 'react'

const image =
  'https://images.freshop.com/00075181201010/e8d6867aed070bc949e07c4658802732_large.png'

const Product = () => {
  return (
    <div className="c-product">
      <div className="c-product__image">
        <img src={image} alt="Produto" />
      </div>
      <h3>Nome produto</h3>
      <div className="c-product__price">R$ 20.99</div>
    </div>
  )
}

export default Product
