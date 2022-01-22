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
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ChatList from "./Components/ChatList";
import ChatDetails from "./Components/ChatDetails";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/contacts" element={<ChatList />} />
        <Route path="/contacts/:contactSlug" element={<ChatDetails />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/features"
          element={<Features features={featuresData} />}
        />
        <Route
          path="/features/:featureSlug/"
          element={<FeatureDetails features={featuresData} />}
        />
      </Routes>

      {/* code goes here */}
    </div>
  );
}

export default App;
