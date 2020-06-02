import React from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

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

async getNutrition(){
   // const key= process.env.REACT_APP_API_KEY_Nutrition;
   try{
         let beverageData= await axios.get(`http://localhost:8090//bodega/v1/beverage`)
         this.setState({beverageList: beverageData.data})
         console.log(this.state.beverageList.bevergaeName);
   }
   catch(error){
      console.log(error)
   }
}
}

export default BeveragePage;