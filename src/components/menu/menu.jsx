import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => (
  <ul>
    {props.items.map(item => (
        <li key={item.url}>
          <Link to={item.url}>{item.name}</Link>
        </li>
      )
    )}
  </ul>
)

export default Menu
