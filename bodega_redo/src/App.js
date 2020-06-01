import React from 'react';
import NutritionSearch from "./components/NutritionSearch"
// import NavigationBar from "./components/NavigationBar"
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import { Collapse, Nav, NavbBar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">

      {/* <NavigationBar/> */}
      <NutritionSearch/>
    </div>
  );
}

export default App;
