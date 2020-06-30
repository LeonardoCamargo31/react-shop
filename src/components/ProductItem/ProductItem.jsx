import React from 'react'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io'
import ProductImage from '../ProductImage/ProductImage'

const ProductItem = () => {
  return (
    <div className="c-product-item">
      <div className="c-product-item__image">
        <ProductImage image="0.jpg" alt="Produto" />
      </div>
      <div className="c-product-item__content">
        <h3>Nome do produto</h3>
        <div className="c-product-item__actions">
          <div className="c-product-item__action-remove">
            <IoIosRemoveCircleOutline />
          </div>
          <div className="c-product-item__action-amount">4</div>
          <div className="c-product-item__action-add">
            <IoIosAddCircleOutline />
          </div>
        </div>
      </div>
      <div className="c-product-item__price">
        <span className="c-product-item__price-current">R$ 25,50</span>
      </div>
    </div>
  )
}

export default ProductItem
