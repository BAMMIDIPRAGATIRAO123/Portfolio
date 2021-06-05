import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
// import Gallery from '.portfolio/my-react-gallery';
// import { HeroImage } from "./components/HeroImage";
// import { Gallery } from "./components/Gallery";
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'React'
  //   };
  // }
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
        {/* <a href={Gallery}>click</a> */}
        {/* <HeroImage />
        <Gallery /> */}
      </div>
    );
  }
}

export default App;