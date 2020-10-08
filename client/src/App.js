import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super ();
    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }  

  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
      {
        this.state.route === 'signin' ?
        <Signin onRouteChange={this.onRouteChange}/>
        :
        <div>
          <Navigation onRouteChange={this.onRouteChange} />
          <Home />
        </div>
      }  
      </div>
    );
  }
}

export default App;
