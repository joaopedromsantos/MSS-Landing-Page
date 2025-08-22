import Clients from "./components/Clients";
import FleetLogistics from "./components/FleetLogistics";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import SackTypes from "./components/SackTypes";
import Statistics from "./components/Statistics";
import ValueProposition from "./components/ValueProposition";
import History from "./components/History";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Hero />
      <ValueProposition />
      <Statistics />
      <Clients />
      <SackTypes />
      <Portfolio />
      <FleetLogistics />
      <History />
      <Contact />
      <Footer />
      <Header />
    </div>
  );
}

export default App;
