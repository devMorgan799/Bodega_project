import React from "react";
import axios from "axios";

class NutritionSearch extends React.Component {

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




render(){
   return (
      <div></div>
   )
  
//    const {employees} = this.state;
   
//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     const 
//       const nutritionList = nutritiondata.map(nutrition => {
//       return (
//       <tr key={nutriton.id}>
//         <td style={{whiteSpace: 'nowrap'}}>{nutrition.description}</td>
//         <td>{nutrition.nutrientName}</td>

//    )
}
}

export default NutritionSearch;

