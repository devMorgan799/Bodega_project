import React from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./Style/NutritionStyle.scss"
import NavigationBar from "./NavigationBar"



class NutritionPage extends React.Component {

constructor(props){
   super(props);
      this.state={
         nutritiionList:[],
            search: false
         
      }
   }


componentDidMount(){
   this.getNutrition();

}

async getNutrition(){
   const key= process.env.REACT_APP_API_KEY_Nutrition;
   try{
         let nutritionData= await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}`)
         this.setState({nutritionList: nutritionData.data})
         console.log(this.state.nutritionList.foods);
   }
   catch(error){
      console.log(error)
   }
}
NutritionTable(){ 
   if(this.state.nutritionList===undefined){}
   else{
       let nutrition=this.state.nutritionList.foods.map(res=> {
           return (
               <div className="">
                    <h2 className="">Name: {res.description}</h2> 
                    <p className=""><span class="">Price: </span>${1}</p>
                     </div>
       )})
       return nutrition;
   }
  
}





render(){
   return (
      <div id="main-div-nutrition-style">
      <NavigationBar/>
      <div id="nutritiontable">
          {this.NutritionTable()}
      </div>
      </div>
   )
  

}
}

export default NutritionPage;

