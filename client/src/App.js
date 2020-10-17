import React, {useState} from 'react';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import './App.css';

const App = () => {

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

  const [route, setRoute] = useState('signin')
  
  const onRouteChange = (route) => {
    setRoute(route)
  }   
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
      {
        route === 'signin' ?
        <Signin onRouteChange={onRouteChange}/>
        :
        <div>
          <Navigation onRouteChange={onRouteChange} />
          <Home />
        </div>
      }  
      </div>
    );
}

export default App;


