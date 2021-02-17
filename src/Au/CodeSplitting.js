import React, { Component, Suspense } from 'react'
// import add from './add'

class CodeSplitting extends Component {
  render() {
    // import('./add').then((math) => {
    //   console.log(math.default(10, 20))
    // })
    // console.log(add(10, 20))
    return <div>CodeSplitting with suspense and dynamic import</div>
  }
}

export default CodeSplitting
