import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Signup from './components/auth/Signup';
const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
    </Switch >
  )
}
export default Routes