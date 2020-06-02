import React from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavigationBar from "./NavigationBar"
import {Button, ButtonGroup, Input, Form, FormGroup } from 'reactstrap';
import "./Style/OrderStyle.scss"



class OrderPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email:"",
            fullName: "",
            age:""
        }
        
        this.handleEmail=this.handleEmail.bind(this);
        this.handleFullName=this.handleFullName.bind(this);
        this.handleAge=this.handleAge.bind(this);
        this.submitButtonHandler=this.submitButtonHandler.bind(this);
        }
    
    handleEmail(event){
        event.preventDefault();
        this.setState({email: event.target.value})
    }
    handleFullName(event){
        event.preventDefault();
        this.setState({fullName: event.target.value})
        
    }
    handleAge(event){
        event.preventDefault();
        this.setState({age: event.target.value})
        
    }


    
    submitButtonHandler(event){
        event.preventDefault();
    }
       
    render(){
    return (
       
        <div id="main-div-order-style"> 
        <NavigationBar/>
        <Form onSubmit={this.submitButtonHandler}>
                        <FormGroup id="ordertable">
                            <p className="subscribe-display-p">Enter your email</p>
                            <Input className="input-request-class"  type="text" name="email" id="input-subscribe-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup  id="ordertable2">
                            <p className="subscribe-display-p">Enter your full name</p>
                            <Input className="input-request-class"  type="text" name="fullName" id="input-subscribe-email" value={this.state.fullName} onChange={this.handleFullName} placeholder="Enter your full name"/>
                        </FormGroup>
                        <FormGroup  id="ordertable3">
                            <p className="subscribe-display-p">Enter Your Order Here</p>
                            <textarea className="input-request-class" type="text" name="preferences" id="input-subscribe-preferences" value={this.state.age} onChange={this.handleAge} placeholder="Enter Order Here"/>
                        </FormGroup>
                    
                    <ButtonGroup id="ordertable3">
                    <Button className="save-button" color="primary" class="btn btn-primary" type="submit">Save</Button>{' '}
                    <Button className="cancel-button"class="btn btn-secondary" tag={Link} to="/">Cancel</Button>
                        </ButtonGroup>
                </Form>
        
        </div>
        
    
    )
}
}

export default OrderPage;