// import React, { Component } from 'react';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import AppNavbar from './AppNavBar';
// import { Link } from 'react-router-dom';



// class InventoryCandyListPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {candy: [], isLoading: true};
//     this.remove = this.remove.bind(this);
//   }

//   componentDidMount() {
//     this.setState({isLoading: true});

//     fetch('/bodega/v1/candy')
//       .then(response => response.json())
//       .then(data => this.setState({candy: data, isLoading: false}));
//   }

//   async remove(id) {
//     await fetch(`/api/nycgeek/employee/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(() => {
//       let updatedCandy = [...this.state.candy].filter(i => i.id !== id);
//       this.setState({candy: updatedCandy});
//     });
//   }

//   render() {
//     const {candy, isLoading} = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     const candyList = candy.map(candy => {
//       return <tr key={candy.id}>
//         <td style={{whiteSpace: 'nowrap'}}>{candy.candyName}</td>
//         <td>{candy.candyName}</td>

//         <td>
//           <ButtonGroup>
//             <Button size="sm" color="primary" tag={Link} to={"/candy/" + candy.id}>Edit</Button>
//             <Button size="sm" color="danger" onClick={() => this.remove(candy.id)}>Delete</Button>
//           </ButtonGroup>
//         </td>
//       </tr>
//     });

//     return (
//       <div>
//         <AppNavbar/>
//         <Container fluid>
//           <div className="float-right">
//             <Button color="success" tag={Link} to="/candy/new">Add Group</Button>
//           </div>
//           <h3>My Candy List</h3>
//           <Table className="mt-4">
//             <thead>
//             <tr>
//               <th width="20%">Candy Name</th>
//               <th width="20%">Candy Price</th>
//               <th>Email</th>
//               <th width="10%">Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {InventoryCandyListPage}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     );
//   }
// }

// export default InventoryCandyListPage;