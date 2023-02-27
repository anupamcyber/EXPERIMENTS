
import './App.css';
import PreNavBar from './component/PreNavBar';
import NavBar from './component/NavBar.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Slider from "./component/Slider.js";
import data from "./data/data.json"
import Offers from "./component/Offers.js"
import Heading from "./component/Heading.js"
import StarProduct from "./component/Starproduct.js"
import HotAccessoriesMenu from "./component/HotAccessoriesMenu.js"
import HotAccessories from "./component/HotAccessories.js"


function App() { 
  return (
  
<Router>
 
  <PreNavBar/>
  <NavBar/>
  <Slider start={data.banner.start}/>
  <Offers offer={data.offer}/>
  <Heading text="STAR PRODUCTS"/>
  <StarProduct  starProduct={data.starProduct}/>
  <Heading text=" HOT ACCESSORIES"/>
  <HotAccessoriesMenu />

  <Route exact path="/music">
    <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />

  </Route>
  
</Router>
  );
}

export default App;



