import React from "react";
import axios from "axios";

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
         let deliData= await axios.get(`http://localhost:8090//bodega/v1/deli`)
         this.setState({deliList: deliData.data})
         console.log(this.state.deliList.deliName);
   }
   catch(error){
      console.log(error)
   }
}

}

export default DeliPage;