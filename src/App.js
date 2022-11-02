import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import ReactGA from 'react-ga';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        {/*<Portfolio resumeData={resumeData}/>*/}
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}
ReactGA.initialize('UA-248169060-1');  // Insert tracking_id from Google Analytics here
ReactGA.pageview(window.location.pathname + window.location.search);

export default App;