import React, { Component } from 'react'

class Map extends Component {
  render() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const listString = [
      'abcc',
      'basdf',
      'casd',
      'dasdf',
      'egyhu',
      'ferty',
      'gertyu',
      'hwer',
      'iedf',
    ]
    const filteredData = listString.filter((item) => !item.indexOf('egyhu'))
    console.log(filteredData)
    const listfruits = [
      {
        id: 1,
        name: 'apple',
      },
      {
        id: 2,
        name: 'mango',
      },
      {
        id: 3,
        name: 'banana',
      },
    ]
    const listItems = listfruits.map((item) => (
      <li>{item.id == 1 ? item.name : item.id}</li>
    ))
    return (
      <>
        <h1>Test1234</h1>
        <ul>{listItems}</ul>
      </>
    )
  }
}

export default Map
