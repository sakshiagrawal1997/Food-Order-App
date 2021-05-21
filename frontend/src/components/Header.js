// import {useHistory} from "react-router-dom";
// function handleCart() {
//  history.push("/cart");
// }
import {useEffect, useState} from "react";
import axios from "axios";
const API_BASE_URL = "http://localhost:8080";
export function Header(props) {
    const [cartCount, updateCount] = useState([]);
    console.log('header function');
    async function fetchCount () {
        console.log('fetching cart');
        const cartAPI = await axios.get(`${API_BASE_URL}/foodItems/getAll`);
        const cartData = cartAPI.data.results;
        console.log(cartData.length);
        updateCount(cartData.length);
  }
  useEffect(() => {
    fetchCount ();
  },);
    return (
        <nav className="navbar navbar-light bg-primary flex">
           <div className="container-fluid">
               <div className="h3 text-center text-light w-100 d-flex" href="#">
                    <div className="w-100">
                       Food Ordering Portal
                    </div> 
                    <div className="d-flex me-5 align-items-center">
                       <a href = "/cart" className="cart-link">
                           <i className="fa fa-shopping-cart ms-auto me-2">{cartCount}</i>
                           
                       </a>
                       
                    </div>
               </div>
           </div>
       </nav>

    );
}