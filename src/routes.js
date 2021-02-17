import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Fragments from './Au/Fragments'
import CssExample from './Au/CssExample'
import Bootstrap from './Au/Bootstrap'
import home from './Au/home'
import Map from './Au/Map'
import HooksExample from './Au/Hooks'
import BuggyCounter from './Au/BuggyCounter'
import newcomponent from './Au/newcomponent'
import onemoreComponent from './Au/onemoreComponent'
// const CodeSplitting = React.lazy(() => import('./Au/CodeSplitting'))
import CodeSplitting from './Au/CodeSplitting'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/book/:id" exact component={onemoreComponent}></Route>
        <Route path="/firstPage" exact component={newcomponent}></Route>
        <Route path="/" exact component={home}></Route>
        <Route path="/fragment" exact component={Fragments}></Route>
        <Route path="/css" exact component={CssExample}></Route>
        <Route path="/bootstrap" exact component={Bootstrap}></Route>
        <Route path="/map" exact component={Map}></Route>
        <Route path="/splitting" exact component={CodeSplitting}></Route>
        <Route path="/hooks" exact component={HooksExample}></Route>
        <Route path="/error" exact component={BuggyCounter}></Route>
      </Switch>
    </BrowserRouter>
  )
}
