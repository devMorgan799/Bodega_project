import React from "react";
import axios from "axios";

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
//    const key= process.env.REACT_APP_API_KEY_Nutrition;
   try{
         let candyData= await axios.get(`http://localhost:8090//bodega/v1/candy`)
         this.setState({candyList: candyData.data})
         console.log(this.state.candyList.candyName);
   }
   catch(error){
      console.log(error)
   }
}

}

export default CandyPage;