import React from 'react'
import useCart from '../hooks/use-cart'

import { GrSecure } from "react-icons/gr";
import { MdDiscount } from "react-icons/md";


const OrderSummary = () => {
    
    const {cart} = useCart(); 
    
    let totalPrice = 0;
    
    
    cart.map( (product) => {
        totalPrice += product.price * product.count
    })
    
    const isDeliveryCharge = totalPrice > 50 ? <p><del> $1.50 </del> $0.00</p> : <p>$1.50</p> 

    return (
        <div className=' mt-4 '>
            <div className='row justify-content-evenly mont-alt '>
                <div className='col-lg-6 col-md-6 col-sm-4  '>
                        <h6 className='fw-bold text-secondary '>subtotal</h6>
                        <h6 className='fw-bold text-secondary  mt-4 mb-4 '>delivery charge</h6>
                        <h6 className='fw-bold text-secondary mb-4 '>coupon relief</h6>
                        <h3 className='fw-bolder '>total</h3>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-4  '>
                       <p className='fw-bold text-secondary '>${totalPrice}.00</p> 
                       <p className='fw-bold text-secondary'> {isDeliveryCharge} </p>
                       <p className='fw-bold mb-4 text-secondary'>0.00</p>
                       <h6 className='fw-bolder'>${totalPrice + (totalPrice > 50 ? 0.00 : 1.50)}</h6>
                </div>

            </div> 
            <div className='row justify-content-evenly'>
                <button className='col-lg-5 col-md-4 col-sm-4 btn btn-warning fw-bolder'><GrSecure/> CHECKOUT</button>
                <button className='col-lg-5 col-md-4 col-sm-4 btn btn-info fw-bolder' > <MdDiscount/> Coupons</button>
            </div>
        </div>
    ) 
}

export default OrderSummary