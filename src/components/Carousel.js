import React from 'react'
import useCart from '../hooks/use-cart'
import useNavigation from '../hooks/use-navigation';
import { BiSolidCategory } from "react-icons/bi";

const Carousel = () => {

    const {searchByCategory, setItems} = useCart();
    const {navigate} = useNavigation();

    const handleClick = (event) => {
        setItems([])  //Setting 'items' array to [] so that placeholder could work after every search or when SHOP is clicked
        searchByCategory(event.target.value)
        navigate("/results")
    }

  return (
    <div className='  col-lg-8 mt-5 row justify-content-center ' > {/*row and justify-content-center added to center categories*/}
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <h3 className='fw-bolder text-danger text-center'> Categories <BiSolidCategory /> </h3> 
            <div class="carousel-indicators    ">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-fs-6  d-md-block">
                        <h5 class = 'fw-bolder fs-2'>Electronics</h5>
                        <p>Laptops, Mobiles & more.</p>
                        <button onClick={handleClick} value = "electronics" class =  "btn btn-success">S H O P</button>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-fs-6  d-md-block">
                        <h5 className='fw-bolder fs-2'>Clothing</h5>
                        <p>Men's & Women's fashion.</p>
                        <button onClick={handleClick} value = "clothing" class =  "btn btn-success">S H O P</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://plus.unsplash.com/premium_photo-1693828617099-032ec505a5db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-fs-6  d-md-block">
                        <h5 className='  fw-bolder fs-2'>Autmobiles</h5>
                        <p >Cars, motorcycles & more.</p>
                        <button onClick={handleClick} value = "automobile" class =  "btn btn-success">S H O P</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-fs-6  d-md-block">
                        <h5 className='  fw-bolder fs-2'>Hygiene</h5>
                        <p >Fragrances & Skin-Care</p>
                        <button onClick={handleClick} value = "hygiene" class =  "btn btn-success">S H O P</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
  </div>
  </div>
  )
}

export default Carousel