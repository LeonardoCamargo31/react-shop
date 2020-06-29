import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io'

const ProductItem = () => {
  return (
    <div className="c-product-item">
      <div className="c-product-item__image">
        <LazyLoadImage
          alt=""
          src={require(`../../images/0.jpg`)}
          effect="blur"
        />
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
