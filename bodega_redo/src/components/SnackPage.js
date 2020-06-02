import React from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



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
         let snackData= await axios.get(`http://localhost:8090//bodega/v1/snack`)
         this.setState({snackList: snackData.data})
         console.log(this.state.snackList.snackName);
   }
   catch(error){
      console.log(error)
   }
}
}

export default SnackPage;