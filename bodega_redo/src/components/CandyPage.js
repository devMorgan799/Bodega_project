import React from "react";
import axios from "axios";
import {Button, ButtonGroup, Input, Form, FormGroup } from 'reactstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavigationBar from "./NavigationBar"
import "./Style/CandyStyle.scss"

class CandyPage extends React.Component {

constructor(props){
   super(props);
      this.state={
         candyList:[],
            search: false
         
      }
   }


componentDidMount(){
   this.getCandy();

}

async getCandy(){
   //no API Key here
   try{
         let candyData= await axios.get(`/bodega/v1/candy`)
         this.setState({candyList: candyData.data})
         console.log(this.state.candyList.candyName);
   }
   catch(error){
      console.log(error)
   }
}

CandyTable(){ 
   if(this.state.candyList===undefined){}
   else{
       let candy=this.state.candyList.map(res=> {
           return (
               <div className="">
                    <h2 className="">Name: {res.candyName}</h2> 
                    <p className=""><span class="">Price: </span>${res.candyPrice}</p>
                     </div>
       )})
       return candy;
   }
  
}

render(){
   return(
      <div id="main-div-candy-style">
      
      <NavigationBar/>
      <div id="candytable">
      {this.CandyTable()}
      </div>
   
      </div>
   )
}
}





export default CandyPage;