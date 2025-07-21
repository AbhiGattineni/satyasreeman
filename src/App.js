import './App.css';
import React from 'react';
import Sliderimg from './Components/Sliderimg';
import Whatwedo from './pages/Whatwedo';
import Business from './pages/Business';
import WhoWeAre from './pages/Whoweare';
import Careers from './pages/Careers';
import Media from './pages/Media';
import { useRef } from 'react';

import Contactus from './pages/Contactus';
import Footer from './pages/Footer';
import Partner from './pages/Partner';

function App() {
  const businessRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const careersRef = useRef(null);
  const mediaRef = useRef(null);
  const contactRef = useRef(null);

  const ref = { businessRef, whatWeDoRef, whoWeAreRef, careersRef, mediaRef, contactRef };

  const executeScroll = (componentRef) => {
    // console.log(componentRef.current)
    componentRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='min-h-screen'>
      <Sliderimg executeScroll={executeScroll} refs={ref} />
      <Business refer={businessRef} />
      <Whatwedo refer={whatWeDoRef} />
      <WhoWeAre refer={whoWeAreRef} />
      <Careers refer={careersRef} />
      <Partner />
      <Media refer={mediaRef} />
      <Contactus refer={contactRef} />
      <Footer executeScroll={executeScroll} refs={ref} />
    </div>
  );
}

export default App; 