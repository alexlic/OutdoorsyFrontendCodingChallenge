import React from 'react'

export default ({ name, onClick, className, children = null }) => {
  return (
    <buttton
      name={name}
      onClick={onClick}
      className={className}
    >
      {children}
    </buttton>
  )
}
