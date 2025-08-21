import Clients from "./components/Clients"
import FleetLogistics from "./components/FleetLogistics"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import SackTypes from "./components/SackTypes"
import Statistics from "./components/Statistics"
import ValueProposition from "./components/ValueProposition"

function App() {

  return(
    <div>
      <Hero/>
      <ValueProposition/>
      <Statistics/>
      <Clients/>
      <SackTypes/>
      <Portfolio/>
      <FleetLogistics/>
    </div>
  )
}

export default App
