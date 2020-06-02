import React from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar"
import './Style/CleaningSupplyStyle.scss'

class CleaningSupplyPage extends React.Component {

constructor(props){
   super(props);
      this.state={
         cleaningSupplyList:[],
            search: false
         
      }
   }

componentDidMount(){
   this.getCleaningSupply();

}

async getCleaningSupply(){
   // const key= process.env.REACT_APP_API_KEY_Nutrition;
   try{
         let cleaningSupplyData= await axios.get(`/bodega/v1/cleaningsupply`)
         this.setState({cleaningSupplyList: cleaningSupplyData.data})
         console.log(this.state.cleaningSupplyList.cleaningSupplyName);
   }
   catch(error){
      console.log(error)
   }
}


CleaningSupplyTable(){ 
   if(this.state. cleaningSupplyList===undefined){}
   else{
       let  cleaningSupply=this.state. cleaningSupplyList.map(res=> {
           return (
               <div className="">
                    <h2 className="">Name: {res. cleaningSupplyName}</h2> 
                    <p className=""><span class="">Price: </span>${res. cleaningSupplyPrice}</p>
                     </div>
       )})
       return cleaningSupply;
   }
  
}

render(){
   return(
      <div id="main-div-cleaningSupply-style">
      
      <NavigationBar/>
      <div id="cleaningSupplytable">
      {this.CleaningSupplyTable()}
      </div>
   
      </div>
   )
}
}


export default CleaningSupplyPage;