import React from 'react';
import NutritionSearch from "./components/NutritionSearch"
import HomePage from "../src/components/HomePage"
// import NavigationBar from "./components/NavigationBar"
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import { Collapse, Nav, NavbBar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <NutritionSearch/>
      {/* <NavigationBar/> */}
      <HomePage/>
    </div>
  );
}

export default App;
cd ..