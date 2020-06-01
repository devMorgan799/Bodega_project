// import React, { Component } from 'react';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import AppNavbar from './AppNavBar';
// import { Link } from 'react-router-dom';

// class InventoryBeverageListPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {candy: [], isLoading: true};
//     this.remove = this.remove.bind(this);
//   }

//   componentDidMount() {
//     this.setState({isLoading: true});

//     fetch('/bodega/v1/candy')
//       .then(response => response.json())
//       .then(data => this.setState({beverage: data, isLoading: false}));
//   }

//   async remove(id) {
//     await fetch(`/api/nycgeek/employee/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(() => {
//       let updatedBeverage = [...this.state.beverage].filter(i => i.id !== id);
//       this.setState({beverage: updatedBeverage});
//     });
//   }

//   render() {
//     const {beverage, isLoading} = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     const candyList = beverage.map(beverage => {
//       return <tr key={beverage.id}>
//         <td style={{whiteSpace: 'nowrap'}}>{candy.candyName}</td>
//         <td>{beverage.beverageName}</td>

//         <td>
//           <ButtonGroup>
//             <Button size="sm" color="primary" tag={Link} to={"/beverage/" + beverage.id}>Edit</Button>
//             <Button size="sm" color="danger" onClick={() => this.remove(beverage.id)}>Delete</Button>
//           </ButtonGroup>
//         </td>
//       </tr>
//     });

//     return (
//       <div>
//         <AppNavbar/>
//         <Container fluid>
//           <div className="float-right">
//             <Button color="success" tag={Link} to="/beverage/new">Add Group</Button>
//           </div>
//           <h3>My Beverage List</h3>
//           <Table className="mt-4">
//             <thead>
//             <tr>
//               <th width="20%">Beverage Name</th>
//               <th width="20%">Beverage Price</th>
//               <th>Email</th>
//               <th width="10%">Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {InventoryBeverageListPage}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     );
//   }
// }

// export default InventoryCandyListPage;