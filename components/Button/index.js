import React from 'react'

export default ({ name, onClick, className, children = null }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  )
}
