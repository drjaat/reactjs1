import React, { Component } from 'react'
import { Button, Tab, Tabs, Spinner, Dropdown } from 'react-bootstrap'

class Bootstrap extends Component {
  render() {
    return (
      <div>
        <h1>Bootstrap components</h1>
        <ul>
          <li>
            <h4>Button:</h4> <Button>Bootstrap Button</Button>
          </li>
          <li>
            <h4>Bootstrap Spinner:</h4>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </li>
          <li>
            <h4>Tabs</h4>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Home">
                Home
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Profile
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                Contact
              </Tab>
            </Tabs>
          </li>
          <li>
            <h4>Dropdown</h4>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    )
  }
}

export default Bootstrap
