import { useSelector } from "react-redux";
import FoodItem from "./fooditem";
import { removeitem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart=()=>{
    const cartItem=useSelector(store => store.cart.items);
    const dispatch=useDispatch();
    const handelClearCart=(item)=>{
        dispatch(removeitem(item))
    }
    return(
        <div className="pt-28">
            <h1 className="ml-4 text-4xl">Items No: {cartItem.length}</h1>
            <button className="border-2 border-black bg-red-400 px-2 ml-4 mt-2" onClick={()=>handelClearCart()} >ClearCart</button>
            <div className="flex flex-wrap justify-around">
                {cartItem.map(item => <FoodItem key={item.card.info.id} {...item.card.info}/>)}
            </div>
        </div>

    

    );
}
export default Cart;