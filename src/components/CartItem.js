import React from 'react'
import useCart from '../hooks/use-cart';

const CartItem = ({ item }) => {
    const {cart, addToCart, removeFromCart, addToLocalStore} = useCart();

    const handleClick = (event) => { 

        if(event.target.value === '+')
        {
            addToCart({...item, count : 1}) // count : 1 is passed accordingly to the addToCart function in cart.js
            addToLocalStore()  // Adds to the Local Storage
        }

        else if(event.target.value === "-")
        {
            removeFromCart(item)
            addToLocalStore();
        }
    }   
    
    let currentCount = 0;


    // To calculate current count of each item

    cart.map( (product) => {
        if(product.id === item.id)
        {
            currentCount = product.count
        }
    })

    return ( 
        <div className='row column-gap-4 mt-4  col-lg-12 col-md-12 col-sm-12 justify-content-evenly text-center table-row'> 
            
            <div className='col-lg-4 col-md-4 col-sm-2 ' style={{"width": "fit-content"}}>
                <img src={item?.thumbnail}  style={{'object-fit': 'cover', 'width': '50px', 'height': '50px'}} alt="..."/>            
                <p className='fs-6'>{item.title}</p>     
            </div>

            <div className='col-lg-6 col-md-6 col-sm-2 ' style={{"width": "fit-content"}}>

                <div className='flex me-2'>
                    <button value = "-" onClick={handleClick} className=' q-btn col-lg-4 col-md-2 col-sm-2  '>-</button> 
                    <p className='col-lg-2 col-md-4 col-sm-4 m-3'>{currentCount}</p>
                    <button value = "+" onClick={handleClick} className=' q-btn col-lg-4 col-md-2 col-sm-2'>+</button>
                </div>

            </div>

            <div className='col-lg-2 col-md-2 col-sm-1 justify-content-center mt-3' style={{"width": "fit-content"}}>
                <p>${item.price * item.count}</p>
            </div>
            
        </div>
    )
}

export default CartItem