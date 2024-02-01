import { useContext } from "react"; 
import { CartContext } from "../context/cart";

function useCart()
{
    return useContext(CartContext)
}

export default useCart;