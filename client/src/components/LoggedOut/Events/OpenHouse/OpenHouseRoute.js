import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OpenHouse from './OpenHouse'

export const OpenHouseRoute = () => {
  return (
    <Switch>
      <Route exact path="/events/OpenHouse/" component={OpenHouse}/>
    </Switch>
  )
}
