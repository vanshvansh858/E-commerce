import { createContext, useEffect, useState } from "react";
import axios from "axios";
const CartContext = createContext()

function CartProvider( { children })
{
     
    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])
    const [err, setErr] = useState('');
    const [ratingItems, setRatingItems] = useState([])
    
    useEffect( () => {
        setCart(JSON.parse(window.localStorage.getItem(1)) || [])
        getHighestRatedProducts() 
    }, [])
    
    const categoryMapping = {
        'electronics' : ['smartphones', 'laptops', 'lighting'],
        'hygiene': ['skincare', 'fragrances'],
        'clothing': ['tops', 'womens-dresses', 'womens-shoes', 'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-bags', 'womens-watches', 'womens-jewellery','sunglasses'],
        'automobile': ['automotive', 'motorcycle'],
        'homeDecor': ['furniture', 'home-decoration']
    }

    const searchByKeyword = async (keyword) => {
        
        try
        {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
            const searchedItems = response.data.products.map( (product) => product)
            console.log(response);
            setItems(searchedItems)
        }
        catch(e)
        {
            setErr(e)
        }
    }

    const searchByCategory = async (category) => {  
            const itemsByCategory = []
            for( const c of categoryMapping[category])
            {
                try
                {
                    const response = await axios.get(`https://dummyjson.com/products/category/${c}`) 
                    response.data.products.map( (p) => itemsByCategory.push({...p, count: 0}))
                } 
                catch(e)
                {
                    setErr(e)
                }
            }   
            setItems([...itemsByCategory])
    }

    const getHighestRatedProducts = async () => {

        try
        {
            const response = await axios.get('https://dummyjson.com/products?limit=100') 
            const highRatedItems = response.data.products.filter((prod) => {
                if(prod.rating >=    4.95)
                {
                    return prod
                }
            })
            setRatingItems(highRatedItems)
        }
        catch(e)
        {
            setErr(e)
        }
        
    }

    const addToCart = (item) => {  

        let itemExists = false
        const newCart = cart.map( (product) => {
            if(item.id === product.id)
            {
                itemExists = true
                product.count = product.count + 1
            } 

            return product
        })

        if(itemExists)
        {
            setCart([...newCart])
        }

        else setCart([...newCart, item ]) 
    }

    const removeFromCart = (item) => { 
        let newCart = cart.map( (product) => {

            if(item.id === product.id)
            {
                if(product.count > 1)
                {
                    product.count = product.count - 1
                    return product 
                } 
                
            }
            else return product

            
        })
       
        newCart = newCart.filter( (product) => {
            if(product !== undefined)
            {
                return product
            }  
        }) 
        setCart(newCart)
    }

    const addToLocalStore = () => {
        window.localStorage.setItem(1, JSON.stringify(cart) )
    } 

    const getRandomNum = () => {
        return Math.floor(Math.random() * 5)
    }  

    const values = {
        cart,
        err,
        items,
        ratingItems, 
        setItems,
        getRandomNum, 
        searchByKeyword,
        searchByCategory,
        addToCart,
        removeFromCart,
        addToLocalStore 
    }
 
    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}

export {CartContext}
export default CartProvider;