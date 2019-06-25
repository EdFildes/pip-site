import React from 'react';
import './App.css';
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    )   
  };
};

export default App;
