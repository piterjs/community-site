import React from 'react'
import { Menu } from '../../components'

const MainMenu = () => (
  <Menu items={[
    {
      url: '/',
      name: 'Главная'
    },
    {
      url: '/about',
      name: 'О проекте'
    },
    {
      url: '/calendar',
      name: 'Календарь событий'
    },
    {
      url: '/contacts',
      name: 'Контактная информация'
    }
  ]} />
)

export default MainMenu
