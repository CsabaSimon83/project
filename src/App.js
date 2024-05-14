import NavBarTop from "./components/NavBarTop";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import NewReleases from "./components/NewReleases";
import Find from "./components/Find";
import NavBarBottom from "./components/NavBarBottom"
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBarTop/>
      <Navbar/>
      <Banner/>
      <NewReleases/>
      <Find/>
      <NavBarBottom/>
    </div>
  );
}

export default App;
