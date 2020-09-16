import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import {Home, Article} from "./Pages"

import "./style.css"
import "bulma/bulma.min.css"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
