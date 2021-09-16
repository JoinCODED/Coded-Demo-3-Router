import logo from './logo.svg';
import './App.css';
import './assets/css/animate.css';
import './assets/css/bootstrap-5.0.0-alpha-2.min.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/main.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import About from './Components/About';
import FeatureDetails from './Components/FeatureDetails';
import featuresData from './featuresData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* code goes here */}
      {/* <Features features={featuresData} />
      <About />
      <FeatureDetails features={featuresData} /> */}
    </div>
  );
}

export default App;
