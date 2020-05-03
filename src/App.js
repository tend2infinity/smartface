import React, { Component } from 'react';
import Navigation from './components/navigation/navigation' ;
import Logo from './components/Logo/Logo' ;
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

import './App.css';

const particlesOptions = {
  
  "particles": {
    "number": {
        "value": 130
    },
    "size": {
        "value": 7
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}
     
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
    }
     
    onInputChange = (event) => {
      console.log(event.target.value);
    }
     onButtonSubmit = () => {
       console.log('click');
     }
     
  
  render(){
  return (
    <div className="App">
    <Particles className='particles'
              params={particlesOptions}
             />
    
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit} 
      />
      {/* <FaceRecognition />  */}
    </div>
  );
  }
}

export default App;
