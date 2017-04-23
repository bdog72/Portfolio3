import React, { Component } from 'react'
import '../styles/reactrouter.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class ReactRouter extends Component {
  render () {
    const Example1 = () => (
      <div>
        <h2>&spades;</h2>
      </div>
    )
    const Example2 = () => (
      <div>
        <h2>&clubs;</h2>
      </div>
    )
    const Example3 = () => (
      <div>
        <h2>&hearts;</h2>
      </div>
    )
    const Example4 = () => (
      <div>
        <h2>&diams;</h2>
      </div>
    )
    const BasicExample = () => (
      <Router>
        <div>
          <ul>
            <li><Link to='/'><h2>SPADES</h2></Link></li>
            <li><Link to='/example2'><h2>CLUBS</h2></Link></li>
            <li><Link to='/example3'><h2>HEARTS</h2></Link></li>
            <li><Link to='/example4'><h2>DIAMONDS</h2></Link></li>
          </ul>
          <hr />
          <Route exact path='/' component={Example1} />
          <Route path='/example2' component={Example2} />
          <Route path='/example3' component={Example3} />
          <Route path='/example4' component={Example4} />
        </div>
      </Router>
    )
    return <div>
      <BasicExample />
    </div>
  }
}
