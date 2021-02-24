import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox'
import Newfood from './component/Newfood';
import Search from './component/Search';


class  App extends Component {
state={foods:foods,
showForm:true,
filterFoods:[]
}

handleShowForm =(event)=>{
    event.preventDefault()
    let name = event.target.name.value
    let image = event.target.image.value
    let quantity = event.target.quantity.value
    let calories = event.target.calories.value
    let newfood = {name:name,image:image,quantity:quantity,calories:calories}

  {
    this.setState({
      foods: [ newfood, ...this.state.foods]
    })
  }
}
        handleChange =(event)=>{
          // console.log(event.target.value)
          let searchText = event.target.value.toLowerCase()
          let filterList = this.state.foods.filter((singleFood)=>{
            return singleFood.name.toLowerCase().includes(searchText)
          })
          this.setState({filterFoods:filterList})
        }
render(){
  return (
    <div className="App">

    <Search myChange={this.handleChange}/>
       <Newfood onAdd={this.handleShowForm} /> 
      

      {this.state.foods.map((singleFood, index) => {
        return <FoodBox
          key={index}
          name={singleFood.name}
          calories={singleFood.calories}
          image={singleFood.image}
          quantity={singleFood.quantity}

          />
        })
      }
    
    </div>
  );
}
  
}

export default App;
