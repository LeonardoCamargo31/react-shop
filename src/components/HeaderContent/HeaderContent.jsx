import React from 'react'
import Button from '../Button/Button'

const HeaderContent = () => {
  return (
    <div className="c-header-content">
      <div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>

        <Button
          type="primary"
          iconName="IoIosArrowDroprightCircle"
          text="Veja o produto"
        />
      </div>
    </div>
  )
}

export default HeaderContent
