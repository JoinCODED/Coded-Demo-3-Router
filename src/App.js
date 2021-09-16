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
import { Route, Switch } from 'react-router';
import featuresData from './featuresData';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/features/:featureSlug">
          <FeatureDetails features={featuresData} />
        </Route>
        <Route path="/features">
          <Features features={featuresData} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
