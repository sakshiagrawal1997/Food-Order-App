import {useState} from "react";
import axios from "axios";
// import {Header} from "./Header";
import foodItemsJSON from "./foodItems.json";
 const API_BASE_URL = "http://localhost:8080";
export function FoodItems(props) {
    //  const [foodItems, updateCartItems] = useState([]);
       async function orderNowClickHandler(subitem) {
          console.log("Order clicked"); 
          console.log(subitem);
          const foodData =  await axios.post(`${API_BASE_URL}/foodItems/add`, {
            name: subitem.name,
            image: subitem.image,
            price : subitem.price,
            description : subitem.description
         });
         //refresh header
       
        //   const updateCartItems = props.updateCartItems;
        //   const cartItemsProps = props.cartItems;
        //   updateCartItems(() => [...cartItemsProps, subitem]);
        //   console.log(foodData);
    }
       
    function renderFoodItems() {
        var url = window.location.pathname;
        console.log(window.location.pathname);
        var i = 0;
        // var url = '/pizza';
        if(url === '/burger'){
            i = 1
        }
        else i = 0
        if(foodItemsJSON !==undefined) {
          return foodItemsJSON.results[i].subItemsData.subItems.map(function(subitem){
              return(
                
                <div className="subdiv">
                    <p className = "nobottommargin title">{subitem.name}</p>
                    <p  className = "nobottommargin">₹{subitem.price}</p>
                    <p><img src={subitem.image} alt="" style={{width: '170px', height: '150px', marginLeft: '15px'}} />
                    {subitem.description}</p>
                    <button className="order_button"
                    onClick={() => orderNowClickHandler(subitem)}
                    >
                        Order Now
                    </button>
                </div>
                
                            
              )
           });
        }
    }
   return (
   <div>
       <h1>Tasty Pizzas</h1>
       <div className="main">
    
       {renderFoodItems()}
    
       </div>
    </div>
   );
   
}