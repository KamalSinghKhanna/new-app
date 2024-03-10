import "./App.css";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LearningModules from "./components/LearningModules";
import WhyUs from "./components/WhyUs";


function App() {
  return (
    <>
      <Home />
      <LearningModules />
      <WhyUs />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
