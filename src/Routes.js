import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import {
  AboutPage,
  CalendarPage,
  ContactsPage,
  MainPage
} from './pages'

const Routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={MainPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/calendar' component={CalendarPage} />
      <Route path='/contacts' component={ContactsPage} />
    </div>
  </BrowserRouter>
)

export default Routes
