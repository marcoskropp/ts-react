import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Dashboard } from './pages/Dashboard/Dashboard'
import { CreateUser } from './pages/CreateUser/CreateUser'
import { EditUser } from './pages/EditUser/EditUser'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/users/create' component={CreateUser} />
        <Route path='/users/:id/edit' component={EditUser} />
        <CreateUser />
      </Switch>
    </BrowserRouter>
  )
}

export { App }