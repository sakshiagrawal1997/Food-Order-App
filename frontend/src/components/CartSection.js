import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {Header} from "./Header";
const API_BASE_URL = "http://localhost:8080";
export function CartSection() {
    console.log("reached cart");
  const [foodItems, updateCartItems] = useState([]);
 async function fetchCartItems () {
        console.log('fetching cart');
        const cartAPI = await axios.get(`${API_BASE_URL}/foodItems/getAll`);
        const cartData = cartAPI.data.results;
        // console.log(cartData[2].name);
        updateCartItems(cartData);
  }
  useEffect(() => {
    fetchCartItems ();
  },[]);
  async function removeClickHandler (_id) {
    console.log('remove item');
    console.log(_id);
    const remove_item = await axios.delete(`${API_BASE_URL}/foodItems/removeItems`,{
      data: {
        "_id": _id,
    },
    });
    fetchCartItems ();
    // fetchCount();
}
async function PlaceOrderHandler () {
  // console.log('remove item');
  // console.log(_id);
  const remove_item = await axios.delete(`${API_BASE_URL}/foodItems/clearCartData`);
  const history = useHistory();
  history.push("/");
}

  function renderCartItems(){
    if(foodItems.length!==0){
  return  foodItems.map(function(subitem){
    return(
                
        <div className="subdiv" key= {subitem.name}>
            <p className = "nobottommargin title">{subitem.name}</p>
            <p  className = "nobottommargin">₹{subitem.price}</p>
            <p><img src={subitem.image} alt="" style={{width: '170px', height: '150px', marginLeft: '15px'}} />
            {subitem.description}</p>
            <button className="order_button"
            onClick={() => removeClickHandler(subitem._id)}
            >
                Remove
            </button>
            
        </div>             
      )

  }
  );
 
    }
    else{
      return(<div>Add Items to the Cart</div>);
    }
}
function renderPlaceOrder(){
  if(foodItems.length!==0){
    return(<button className="order_button"
    onClick={() => PlaceOrderHandler()}>
        Place Order
    </button>  );}}
  return(
    <div>
    <div className="main">
 
    {renderCartItems()}
    {renderPlaceOrder()}
    
    </div>
 </div>
  );

}
