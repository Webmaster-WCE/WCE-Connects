import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PlatinumJubileeMeet } from './PlatinumJubileeMeet'
import { PlatinumJubileePreRegistration } from './PlatinumJubileePreRegistration'
import PlatinumJubileeRegistration from './PlatinumJubileeRegistration'

export const PlatinumJubileeMeetRoute = () => {
  return (
    <Switch>
      <Route exact path="/events/PlatinumJubileeMeet/" component={PlatinumJubileeMeet}/>
      <Route exact path="/events/PlatinumJubileeMeet/PreRegistration" component={PlatinumJubileePreRegistration}/>
      <Route exact path="/events/PlatinumJubileeMeet/Registration" component={PlatinumJubileeRegistration}/>
    </Switch>
  )
}
