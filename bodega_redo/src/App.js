import React from 'react';
import NutritionPage from "./components/NutritionPage"
import HomePage from "../src/components/HomePage"
import NavigationBar from "../src/components/NavigationBar"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import { Collapse, Nav, NavbBar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import BeveragePage from "../src/components/BeveragePage"
import CandyPage from "../src/components/CandyPage"
import DeliPage  from "../src/components/DeliPage"
// import InventoryCandyEditPage  from "../src/components/InventoryCandyEditPage"
// import InventoryCandyListPage from "../src/componentsInventoryCandyListPage"



import SnackPage from "../src/components/SnackPage"
import OrderPage from "../src/components/OrderPage"


function App() {
  return (
    <div>
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage}></Route> 
            <Route exact path="/candy" component={CandyPage}></Route>
            <Route exact path="/snack" component={SnackPage} ></Route>
            <Route exact path="/beverage" component={BeveragePage} ></Route>
            <Route exact path="/deli "component={DeliPage} ></Route>
            <Route exact path="/nutrition" component={NutritionPage} ></Route>
            <Route exact path="/order" component={OrderPage} ></Route>
            {/* <Route path="/inventoryCandyEdit" exact={true} component={InventoryCandyEditPage}></Route>
            <Route path="/inventoryCandyList" exact={true} component={InventoryCandyListPage}></Route> */}
        </Switch>
    </Router>
     </div>
    // <div className="App">
    //   <NutritionSearch/>
    //    <NavigationBar/>
    //   <HomePage/>
    // </div> 
  )
}

export default App;
