import React, { Component } from 'react'
import '../styles/cssgrid.scss'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      imageURL: '',
      bio: ''
    }
  }

  componentDidMount () {
    window.fetch('https://api.github.com/users/bdog72').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({name: data.name, location: data.location, imageURL: data.avatar_url, bio: data.bio})
    })
  }

  render () {
    return <div className='wrapper'>
      <div className='box header'>
        <div className='head1'>
          <h1>{this.state.name}</h1>
        </div>
      </div>
      <div className='box sidebar'>Sidebar</div>
      <div className='box sidebar2'>Sidebar 2</div>
      <div className='box content'>Content</div>
      <div className='box footer'>Footer</div>
    </div>
  }
}
