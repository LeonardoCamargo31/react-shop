import React from 'react'

const InputText = ({ type, name, label, placeholder, onChange, onFocus }) => {
  return (
    <div className="c-input-text">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  )
}

export default InputText
