import React from "react";
import {Route, IndexRedirect} from "react-router";
import App from "../components/App";

import Favourites from "../pages/Favourites";
import FavouriteRun from "../pages/FavouriteRun";
import FavouriteStatsRun from "../pages/FavouriteStatsRun";

export default (
  <Route path="/" component={App}>
    <Route path="home/">
      <Route path="favourites" component={Favourites}/>
      <Route path="run/query/:id" component={FavouriteRun}/>
      <Route path="run/stats/:id" component={FavouriteStatsRun}/>
    </Route>
    <IndexRedirect to="home/favourites"/>
  </Route>
);
