import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Events from './Events'
import { GraduationRoute } from './Graduation/GraduationRoute';
import OpenHouse from './OpenHouse/OpenHouse';
import { PlatinumJubileeMeetRoute } from './PlatinumJubileeMeet/PlatinumJubileeMeetRoute';

export const EventsMap = () => {
  
  return (
    <>
         <Switch>
            <Route path="/events/" exact component={Events} />
            {/* <Route path="/events/DataCentre" component={Register} /> */}
            <Route path="/events/PlatinumJubileeMeet" component={PlatinumJubileeMeetRoute} />
            <Route path="/events/Graduation" exact component={GraduationRoute} />
            <Route path="/events/OpenHouse" exact component={OpenHouse} />
            {/* <Route path="/events/Conference" exact component={Register} />
            <Route path="/events/IndustryMeet" exact component={Register} />
            <Route path="/events/GatheringAndSport" exact component={Register} />
            <Route path="/events/OpenHouse" exact component={Events} />
            <Route path="/events/ClosingCeremony" exact component={Events} /> */}
          </Switch>   
    </>
  )
}
