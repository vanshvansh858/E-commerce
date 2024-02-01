import React from 'react'
import Navbar from './components/Navbar';
import Route from './components/Route'; 
import HomePage from './pages/HomePage'; 
import ResultsPage from './pages/ResultsPage';
import CartPage from './pages/CartPage'; 

import useCart from './hooks/use-cart';
import useNavigation from './hooks/use-navigation';

import { RiHomeSmile2Fill } from "react-icons/ri";
import { BiSolidError } from "react-icons/bi";
import { RiSignalWifiErrorFill } from "react-icons/ri";
 
const App = () => { 

    const {err} = useCart();
    const {navigate} = useNavigation();


    // Display on error in calling Axios methods
    const errContent = (<div className='text-center m-auto '>
        <Navbar />
            <h1 className='text-danger fs-1 fw-bolder margin-custom '>404</h1> 
            <p>Something went wrong <span className='text-danger'> < BiSolidError /> </span> </p> 
            <p>  {err.message} <span className='text-danger '>  <RiSignalWifiErrorFill /> </span> </p> 
            <button onClick={() => {navigate("/")}} className='btn btn-danger'> Home <RiHomeSmile2Fill /> </button>
        </div>)

    return (
        (err ? errContent : <div>
            <Navbar />
            <Route path="/">
                <HomePage />
            </Route>

            <Route path= "/results">
                <ResultsPage />
            </Route>
            <Route path= "/cart">
                <CartPage />
            </Route> 
        </div>)
    )
}

export default App;