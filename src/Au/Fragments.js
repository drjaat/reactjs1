import React, { Component, Fragment } from 'react'

class Fragments extends Component {
  render() {
    return (
      <>
        <h1>hi Auers,</h1>
        <p>
          I heard you like fragments so I{' '}
          <>
            put a <>fragment</> in your fragment
          </>
          .
        </p>
      </>
    )
    // return (
    //   <Fragment>
    //     <h1>hi Auers,</h1>
    //     <p>
    //       I heard you like fragments so I{' '}
    //       <>
    //         put a <>fragment</> in your fragment
    //       </>
    //       .
    //     </p>
    //   </Fragment>
    // )
    return (
      <div>
        <h1>hi Auers,</h1>
        <p>
          I heard you like fragments so I{' '}
          <>
            put a <>fragment</> in your fragment
          </>
          .
        </p>
      </div>
    )
  }
}

export default Fragments
