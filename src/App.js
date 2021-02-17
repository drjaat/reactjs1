import React, { Suspense } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router1 from './routes'

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router1></Router1>
    </Suspense>
  )
}

export default App
