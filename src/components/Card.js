import React from 'react' 
import useCart from '../hooks/use-cart'
import ReactStars from "react-rating-stars-component";

const Card = ({ item }) => {  

    const {cart, addToCart, removeFromCart, addToLocalStore} = useCart();

    const handleClick = (event) => { 

        if(event.target.value === '+')
        {
            addToCart({...item, count : 1})
            addToLocalStore()
        }

        else if(event.target.value === "-")
        {
            removeFromCart(item)
            addToLocalStore();
        }
    }   
    
    let currentCount = 0;

    cart.map( (product) => {
        if(product.id === item?.id)
        {
            currentCount = product.count
        }
    })

    return ( 
        <div class="card p-2 " style={{'width': '20rem', 'border': 'none'}}>
            <img src={item?.thumbnail} class="card-img-top ms-5 " style={{'object-fit': 'cover', 'width': '200px', 'height': '200px'}} alt="..."/>
            <div class="card-body mt-4 bg-light">
                <p class="card-title fw-bolder">{item?.title}</p> 
                <p class =" fw-bolder" >${item?.price}<span className='fs-5'>.00</span></p> 
                <div>
                    <ReactStars size = {25}  isHalf = {true} count = {5} value = {item?.rating.toFixed(1)}/>
                    <span>({item?.rating.toFixed(1)})</span>
                </div>
                <button class="btn btn-sm btn-danger mt-2"> <button value = "-" onClick={handleClick} className='btn text-white'> {(currentCount || "") && "-"} </button> {currentCount || 'Add' } <button value = "+" onClick={handleClick} className='btn text-white '> + </button>  </button>
            </div>
        </div> 
  )
}

export default Card