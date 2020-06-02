import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

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
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">BodegaHome</NavbarBrand>
      <NavbarBrand href="/candy">Candy</NavbarBrand>
      <NavbarBrand href="/snack">Snacks</NavbarBrand>
      <NavbarBrand href="/cleaningSupply">Cleaning Supplies</NavbarBrand>
      <NavbarBrand href="/deli">Deli</NavbarBrand>
      <NavbarBrand href="/nutrition">Nutrition Info</NavbarBrand>
      <NavbarBrand href="/order">ORDER NOW</NavbarBrand>

    </Navbar>)
  }
}
