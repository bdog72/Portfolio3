import React, { Component } from 'react'
import ReactRouter from './ReactRouter'
import { Image } from 'react-bootstrap'
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
        <div>
          <h1>{this.state.name}</h1>
        </div>
        <div className='profilePic'>
          <Image src={this.state.imageURL} responsive circle />
        </div>
        <p>{this.state.bio}</p>
        <p>I'm a Jr, Front End Engineer in {this.state.location}</p>
      </div>
      <div className='box sidebar'>
        <p>Some Of The Skills I Learned At <br /> <img src='https://www.theironyard.com/etc/designs/theironyard/icons/iron-yard-logo.svg' alt='' /></p>
        {/* <div className='skills'> */}
        <ul className='skills1'>
          <li><Image src='https://cdn1.iconfinder.com/data/icons/line-essentials-64/20/3155-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_287-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills2'>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-128.png' responsive /></li>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills3'>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/free_windows7_icons_emoticons/64/clown.png' responsive /></li>
        </ul>
        {/* </div> */}
        {/* <ul className='skills1'>
          <li><img src='https://cdn1.iconfinder.com/data/icons/line-essentials-64/20/3155-128.png' alt='' /></li>
          <li><img src='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_287-128.png' alt='' /></li>
        </ul>
        <ul className='skills2'>
          <li><img src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-128.png' responsive /></li>
          <li><img src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills3'>
          <li><img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png' alt='' /></li>
          <li><img src='https://cdn0.iconfinder.com/data/icons/free_windows7_icons_emoticons/64/clown.png' /></li>
        </ul> */}
      </div>
      <div className='box sidebar2'>
        <p>React Router</p>
        <ReactRouter />
      </div>
      <div className='box content'>
        <h2>Follow Me On Twitter</h2>
        <div className='tweet'>
          <a href='https://twitter.com/Bdoggy72'>
            <Image src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/twitter-128.png' responsive />
          </a></div>
        <p>My Current GitHub Chart</p>
        <div className='gitHub'>
          <a href='https://github.com/bdog72'>
            <Image src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
          </a>
        </div>
      </div>
      <div className='box footer'>
        <p>813-505-4733</p>
        <p>high5bri&#64;hotmail.com</p>
        <p>Made With &hearts; From What I Learned At The Iron Yard</p>
      </div>
    </div>
  }
}
