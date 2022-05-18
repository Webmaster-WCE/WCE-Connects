import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Graduation from './Graduation'

export const GraduationRoute = () => {
  return (
    <Switch>
      <Route exact path="/events/Graduation/" component={Graduation}/>
    </Switch>
  )
}
