import React from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavigationBar from "./NavigationBar"
import "./Style/DeliStyle.scss"


class DeliPage extends React.Component {

constructor(props){
   super(props);
      this.state={
         deliList:[],
            search: false
         
      }
   }


componentDidMount(){
   this.getDeli();

}

async getDeli(){
   // const key= process.env.REACT_APP_API_KEY_Nutrition;
   try{
         let deliData= await axios.get(`/bodega/v1/deli`)
         this.setState({deliList: deliData.data})
         console.log(this.state.deliList.deliName);
   }
   catch(error){
      console.log(error)
   }
}


DeliTable(){ 
   if(this.state.deliList===undefined){}
   else{
       let  deli=this.state. deliList.map(res=> {
           return (
               <div className="">
                    <h2 className="">Name: {res.deliName}</h2> 
                    <p className=""><span class="">Price: </span>${res. deliPrice}</p>
                     </div>
       )})
       return deli;
   }
  
}

render(){
   return(
      <div id="main-div-deli-style">
      
      <NavigationBar/>
      <div id="delitable">
      {this.DeliTable()}
      </div>
   
      </div>
   )
}
}


export default DeliPage;