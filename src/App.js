import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { SinglePage } from "./pages/SinglePage"
import "./css/App.css"

function App() {
  return (
    <Router basename={"/CovidStats/"}>
      <div className="main-title">Cuzzie's Coronavirus App</div>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:country" component={SinglePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
