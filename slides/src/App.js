import "./App.css";
import Carousel from "./components/Carousel";
import { slides } from "./components/Data";

function App() {
  return (
    <div className="App">
      <div className="topContent">
        <h2> Blank Scope Microscope</h2>
        <p>From Microscope to Moleculers</p>
      </div>
      {/* Carousel */}
      <Carousel images={slides} />
    </div>
  );
}

export default App;
