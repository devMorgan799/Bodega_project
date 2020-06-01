// import React from "react";
// import axios from "axios";
// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
// import AppNavbar from './AppNavBar';

// class InventoryCandyEditPage extends Component {

//    emptyItem = {
//      candyName: '',
//      candyPrice: '',
//    };
 
//    constructor(props) {
//      super(props);
//      this.state = {
//        item: this.emptyItem
//      };
//      this.handleChange = this.handleChange.bind(this);
//      this.handleSubmit = this.handleSubmit.bind(this);
//    }
 
//    async componentDidMount() {
//      if (this.props.match.params.id !== 'new') {
//        const group = await (await fetch(`/api/nycgeek/employee/${this.props.match.params.id}`)).json();
//        this.setState({item: group});
//      }
//    }
 
//    handleChange(event) {
//      const target = event.target;
//      const value = target.value;
//      const name = target.name;
//      let item = {...this.state.item};
//      item[name] = value;
//      this.setState({item});
//    }
 
//    async handleSubmit(event) {
//      event.preventDefault();
//      const {item} = this.state;
 
//      await fetch('/api/nycgeek/employee', {
//        method: (item.id) ? 'PUT' : 'POST',
//        headers: {
//          'Accept': 'application/json',
//          'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(item),
//      });
//      this.props.history.push('/Candy');
//    }
 
//    render() {
//      const {item} = this.state;
//      const title = <h2>{item.id ? 'Edit Candy' : 'Add Candy'}</h2>;
 
//      return <div>
//       <AppNavbar/>
//       <Container>
//         {title}
//         <Form onSubmit={this.handleSubmit}>
//           <FormGroup>
//             <Label for="lastName">First Name</Label>
//             <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
//                    onChange={this.handleChange} autoComplete="firstName"/>
//           </FormGroup>
//           <FormGroup>
//             <Label for="lastName">Last Name</Label>
//             <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
//                    onChange={this.handleChange} autoComplete="lastName"/>
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input type="text" name="email" id="email" value={item.email || ''}
//                    onChange={this.handleChange} autoComplete="email"/>
//           </FormGroup>
        
//           <FormGroup>
//             <Button color="primary" type="submit">Save</Button>{' '}
//             <Button color="secondary" tag={Link} to="/employees">Cancel</Button>
//           </FormGroup>
         
//         </Form>
//       </Container>
 
//      </div>
//    }
//  }
 
//  export default withRouter(InventoryCandyEditPage);