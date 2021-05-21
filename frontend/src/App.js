import {useState} from "react";
import './App.css';
import {Header} from "./components/Header";
import{FoodItems} from "./components/FoodItems";
import{CartSection} from "./components/CartSection";
import{Landing} from "./components/Landing";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
    
  return (
    <Router>
  <div className="App">
      <Header />
      <Switch>
      <Route path="/pizza"><FoodItems /></Route>
      <Route path="/burger"><FoodItems /></Route>
        <Route path="/cart"><CartSection /></Route>
      <Route path="/"><Landing /></Route>
      
      </Switch>
      {/* <FoodItems updateCartItems={updateCartItems} cartItems={cartItems} /> */}
     
    </div>
    </Router>
  );
}

export default App;
