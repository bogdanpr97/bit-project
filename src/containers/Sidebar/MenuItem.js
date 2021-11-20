import React from 'react'

const MenuItem = ({ IconComponent, title }) => {
  return (
    <div onClick={() => console.log(`hello ${title}`)} className="menu-item-container">
      <IconComponent />
      <div className="menu-item-title">{title}</div>
    </div>
  )
}

export default MenuItem
