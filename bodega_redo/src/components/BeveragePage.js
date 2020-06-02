import React from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./Style/BeverageStyle.scss"
import NavigationBar from "./NavigationBar"

class BeveragePage extends React.Component {

constructor(props){
   super(props);
      this.state={
         beverageList:[],
            search: false
         
      }
   }


componentDidMount(){
   this.getBeverage();

}

async getBeverage(){
   // const key= process.env.REACT_APP_API_KEY_Nutrition;
   try{
         let beverageData= await axios.get(`/bodega/v1/beverage`)
         this.setState({beverageList: beverageData.data})
         console.log(this.state.beverageList.bevergaeName);
   }
   catch(error){
      console.log(error)
   }
}

   BeverageTable(){ 
      if(this.state.beverageList===undefined){}
      else{
          let beverage=this.state.beverageList.map(res=> {
              return (
                  <div className="">
                       <h2 className="">Name: {res.beverageName}</h2> 
                       <p className=""><span class="">Price: </span>${res.beveragePrice}</p>
                        </div>
          )})
          return beverage;
      }
     
   }
   
   render(){
      return(
         <div id="main-div-beverage-style">
         
         <NavigationBar/>
         <div id="beveragetable">
         {this.BeverageTable()}
         </div>
      
         </div>
      )
   }
   }

export default BeveragePage;