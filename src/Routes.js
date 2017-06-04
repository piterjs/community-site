import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  AboutPage,
  CalendarPage,
  ContactsPage,
  MainPage,
  NotFoundPage
} from './pages'

const Routes = (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/calendar' component={CalendarPage} />
    <Route path='/contacts' component={ContactsPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
