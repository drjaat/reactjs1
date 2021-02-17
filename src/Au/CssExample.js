import React, { Component } from 'react'

class CssExample extends Component {
  render() {
    const style = {
      backgroundColor: 'yellow',
    }
    return (
      <div>
        <h1 style={{ color: 'red', fontSize: '20px' }}>color red</h1>
        <h1 style={style}>color red</h1>
        <h1>color red</h1>
      </div>
    )
  }
}

export default CssExample

// import React, { Component } from 'react'

// class CssExample extends Component {
//   render() {
//     const style1 = {
//       color: 'red',
//     }
//     const style2 = {
//       backgroundColor: 'green',
//     }
//     const style3 = {
//       fontSize: '50px',
//     }
//     return (
//       <div>
//         <h1 style={style1}>Color Red</h1>
//         <h2 style={style2}>Background color green</h2>
//         <h3 style={style3}>fontsize 50px</h3>
//         {/* <h1 style={{ color: 'red' }}>Color Red</h1>
//         <h2 style={{ backgroundColor: 'green' }}>Background color green</h2>
//         <h3 style={{ fontSize: '50px' }}>fontsize 50px</h3> */}
//       </div>
//     )
//   }
// }

// export default CssExample
