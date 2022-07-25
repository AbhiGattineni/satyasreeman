import './App.css';
import React from 'react';
import Sliderimg from './Components/Sliderimg';
import Whatwedo from './pages/Whatwedo';
import Business from './pages/Business';
import WhoWeAre from './pages/Whoweare';
import Cards from './Components/Cards';


function App() {
  return (
    <div className='min-h-screen'>
      <Sliderimg />
      <Business />
      <Cards />
      <Whatwedo />
      <WhoWeAre />
    </div>
  );
}

export default App; 