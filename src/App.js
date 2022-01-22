import logo from "./logo.svg";
import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-alpha-2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";

import Home from "./Components/Home";
import Features from "./Components/Features";
import About from "./Components/About";
import FeatureDetails from "./Components/FeatureDetails";
import featuresData from "./featuresData";

const App = () => {
  return (
    <div className="App">
      {/* Home emoji :Home */}
      <h1>Page 1: Home</h1>
      <hr />
      <Home />
      <h1>Page 2: List of features</h1>
      <hr />
      <Features features={featuresData} />
      <h1>Page 3: About</h1>
      <hr />
      <About />
      <h1>Page 4: Feature Details</h1>
      <hr />
      <FeatureDetails features={featuresData} />
    </div>
  );
};

export default App;
