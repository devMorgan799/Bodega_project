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
      <NavbarBrand href="/">Candy</NavbarBrand>
      <NavbarBrand href="/">Snacks</NavbarBrand>
      <NavbarBrand href="/">Cleaning Supplies</NavbarBrand>
      <NavbarBrand href="/">Deli</NavbarBrand>
      <NavbarBrand href="/">Nutrition Info</NavbarBrand>
      <NavbarBrand href="/">ORDER NOW</NavbarBrand>

    </Navbar>)
  }
}
