import React from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavigationBar from "./NavigationBar"
import "./Style/SnackStyle.scss"



class SnackPage extends React.Component {

constructor(props){
   super(props);
      this.state={
         snackList:[],
            search: false
         
      }
   }


componentDidMount(){
   this.getSnack();

}

async getSnack(){
   // const key= process.env.REACT_APP_API_KEY_Nutrition;
   try{
         let snackData= await axios.get(`/bodega/v1/snack`)
         this.setState({snackList: snackData.data})
         console.log(this.state.snackList.snackName);
   }
   catch(error){
      console.log(error)
   }
}

SnackTable(){ 
   if(this.state.snackList===undefined){}
   else{
       let snack=this.state.snackList.map(res=> {
           return (
               <div className="">
                    <h2 className="">Name: {res.snackName}</h2> 
                    <p className=""><span class="">Price: </span>${res.snackPrice}</p>
                     </div>
       )})
       return snack;
   }
  
}

render(){
   return(
      <div id="main-div-snack-style">
      
      <NavigationBar/>
      <div id="snacktable">
      {this.SnackTable()}
      </div>
   
      </div>
   )
}
}



export default SnackPage;