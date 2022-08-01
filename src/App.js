import './App.css';
import React from 'react';
import Sliderimg from './Components/Sliderimg';
import Whatwedo from './pages/Whatwedo';
import Business from './pages/Business';
import WhoWeAre from './pages/Whoweare';
import Careers from './pages/Careers';
import Media from './pages/Media';
import Contactus from './pages/Contactus';
import Footer from './pages/Footer';


function App() {
  return (
    <div className='min-h-screen'>
      <Sliderimg />
      <Business />
      <Whatwedo />
      <WhoWeAre />
      <Careers />
      <Media />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App; 