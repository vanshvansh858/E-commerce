import React from 'react'
import useCart from '../hooks/use-cart' 
import OrderSummary from '../components/OrderSummary';
import useNavigation from '../hooks/use-navigation';
import CartItem from '../components/CartItem';

import { CiShoppingCart } from "react-icons/ci";
import { TbShoppingCartPlus } from "react-icons/tb"; 

const CartPage = () => {

    const {cart} = useCart();
    const {navigate} = useNavigation();

    const noItems = (<div className='text-center '>
            <h1 className='text-secondary fs-2 fw-bolder margin-custom'>Your cart is empty. </h1>
            <p>Go to the homepage or search </p> 
            <button onClick={() => {navigate("/")}} className='btn btn-danger'> Continue shopping <TbShoppingCartPlus /> </button>
        </div>)
    
    const renderedItems = cart.map( (product) => {
        return( <CartItem item = {product} /> )
    }) 
    return (
        <div>
           {(renderedItems.length && 
            <div className='container  '>
                <h1 className='text-center  m-2 fw-bolder text-secondary '> <CiShoppingCart className='lg-icon' /> My Cart</h1>
                <div className='row pt-2 justify-content-center border-t ' >
                    <div className="row col-lg-7 col-md-12 col-sm-12" >
                        <div  >
                            {/* Table Headings */}

                            <div className='row column-gap-3 fs-6   fw-bolder mt-4 col-lg-12 col-md-12 col-sm-12 justify-content-evenly'> 
                                <div className='col-lg-4 col-md-4 col-sm-2 ' style={{"width": "fit-content"}}> 
                                    <p className=''>PRODUCT</p>     
                                </div> 
                                <div className='col-lg-6 col-md-6 col-sm-2 ' style={{"width": "fit-content"}}>
                                
                                    <div className='flex text-center'> 
                                        <p>QUANTITY</p>
                                    </div>
                                </div>

                                <div className='col-lg-2 col-md-2 col-sm-2 justify-content-center' style={{"width": "fit-content"}}>
                                    <p>PRICE</p> 
                                </div>
                            </div>
                            {/* Table Contents */}
                            {renderedItems}
                        </div>
                    </div>

                    <div className='col-lg-5 col-md-12 col-sm-12 text-center  '>  
                            <OrderSummary /> 
                    </div>

                </div>
            </div>) || (noItems) }
        </div>
    )
}

export default CartPage