import React from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar"

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
         let cleaningSupplyData= await axios.get(`http://localhost:8090//bodega/v1/cleaningsupply`)
         this.setState({cleaningSupplyList: cleaningSupplyData.data})
         console.log(this.state.cleaningSupplyList.cleaningSupplyName);
   }
   catch(error){
      console.log(error)
   }
}
}

export default CleaningSupplyPage;