import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = (props) => (
  <ul>
    {props.items.map(item => (
        <li key={item.url}>
          <NavLink to={item.url} activeClassName="-active">{item.name}</NavLink>
        </li>
      )
    )}
  </ul>
)

export default Menu
