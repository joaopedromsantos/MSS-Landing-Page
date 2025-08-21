import Clients from "./components/Clients"
import FleetLogistics from "./components/FleetLogistics"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import SackTypes from "./components/SackTypes"
import Statistics from "./components/Statistics"
import ValueProposition from "./components/ValueProposition"
import History from "./components/History"

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
      <History/>
    </div>
  )
}

export default App
