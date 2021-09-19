import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BeersPage from './BeersPage'
import BeerDetailsPage from './BeerDetailsPage'

export default function BeersSwitch() {
  return (
    <Switch>
      <Route path="/beers" exact component={BeersPage}/>
      <Route path="/beers/:id" exact component={BeerDetailsPage} />
    </Switch>
  )
}
