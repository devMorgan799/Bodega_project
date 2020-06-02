import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "../components/Style/NavigationStyle.scss"

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      
    <Navbar id="main-div-nav-style" color="dark" dark expand="md">
      <NavbarBrand id="main-div-nav-style" href="/">Bodega'sHome</NavbarBrand>
      <NavbarBrand id="main-div-nav-style" href="/candy">Candy</NavbarBrand>
      <NavbarBrand id="main-div-nav-style" href="/snack">Snacks</NavbarBrand>
      <NavbarBrand id="main-div-nav-style" href="/beverage">Beverages</NavbarBrand>
      <NavbarBrand id="main-div-nav-style" href="/cleaningsupply">CleaningSupplies</NavbarBrand>
      <NavbarBrand id="main-div-nav-style" href="/deli">Deli</NavbarBrand>
      <NavbarBrand id="main-div-nav-style" href="/nutrition">Nutrition Info</NavbarBrand>
      <NavbarBrand id="main-div-nav-style" href="/order">ORDER NOW</NavbarBrand>

    </Navbar>
       
    )
    
  }
  
}

