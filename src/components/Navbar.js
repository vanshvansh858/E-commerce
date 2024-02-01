import React from 'react'
import { useState } from 'react';
import useCart from '../hooks/use-cart';
import useNavigation from '../hooks/use-navigation';

import { IoSearch } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
const Navbar = () => {

    // State for input search field
    const [value, setValue] = useState('');

    const {searchByKeyword, setItems} = useCart();
    const {navigate} = useNavigation();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setItems([])            //Setting 'items' array to [] so that placeholder could work after every search or when SHOP is clicked
        searchByKeyword(value)
        navigate("/results")
    } 

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-secondary-subtle ">
            <div class="container-fluid">
                <a class="navbar-brand shoplux " >Shoplux</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse mont-alt" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                        <li class="nav-item">
                            <a onClick = {() => {navigate("/")}} class=" mx-3 link-secondary link-opacity-75 link-offset-3 link-opacity-100-hover fw-bolder active hover-cls" aria-current="page" >home</a>
                        </li> 
                        <li class="nav-item">
                        <a class=" mx-3 link-secondary link-opacity-75 link-offset-3 link-opacity-100-hover fw-bolder active hover-cls" aria-current="page">login</a>
                        </li>   
                        
                    </ul>
                    <a  onClick = {() => {navigate("/cart")}} className='m-2 me-4 ms-4 fs-4 hover-cls link-secondary link-opacity-75 link-opacity-100-hover icon-link icon-link-hover' ><BsCart /></a>
                    <form onSubmit = {handleSubmit} class="d-flex" role="search">
                        <input onChange={handleChange} class="form-control me-4 px-4" type="search" placeholder="Search . . ." aria-label="Search"/>
                        <button  class="btn btn-outline-secondary rounded-circle" type="submit"> <IoSearch /> </button>
                    </form>
                
                </div>
            </div>
</nav>
    </div>
  )
}
export default Navbar