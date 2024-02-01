import React, { useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSavings } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";

import Carousel from '../components/Carousel'
import useCart from '../hooks/use-cart';
import Card from '../components/Card';

const HomePage = () => {

    const {ratingItems, getRandomNum} = useCart(); 
    const myRef = useRef(null) //Scroll to Categories

    return(
    <div >
        <div className=' row entry-con '>
            <div className='col-lg-6 imgd d-none d-md-none d-lg-block'> {/*Image Div */}

            </div>
            <div className='col-lg-6 col-sm-12 text-center m-custom'> 
                <h1 className='fw-bolder'>Discover products </h1>
                <h3 className=''>for a life well lived.</h3>
                <span>No delivery charges</span>
                <p>for orders above than $50</p>
                <button  onClick={() => {myRef.current.scrollIntoView()  }} className='btn btn-danger mt-4'>Go to Store <IoIosArrowDown /> </button>
            </div>
        </div>
        <div className=' row justify-content-center pt-5 '>                   {/*Features*/}
          <div className='col-lg-4 col-md-12 col-sm-12 mt-4 text-center  '> 
              
              <div >< TbTruckDelivery   className='shipped '/></div>
              <p className='fw-bolder mt-2  fs-6 text-secondary'>Free Shipping</p>
          </div>
          
          <div className='col-lg-4 col-md-12 col-sm-12 mt-4 text-center '>

              <div >< MdSavings  className='shipped text-primary'/></div>
              <span className='fw-bolder fs-6 text-secondary'>Free delivery </span>
              <p className='fw-bolder fs-6   text-secondary'>for orders above 50$ </p>
          </div>

          <div className='col-lg-4 col-md-12 col-sm-12 mt-4 text-center  '>
              <div >< FaHeadphones   className='shipped text-danger'/></div>
              <p className='fw-bolder  mt-2 fs-6 text-secondary'>24/7 Support</p>

          </div>

        </div>
        <div ref={myRef} className='container mt-5  '>                {/*Categories and Top Rated */}
          <div className='row  mt-3 '> 
            <Carousel />
            <div className='row col-lg-4 mt-5'>
                <div className='row justify-content-center col-lg-12'>
                  <h3 className='text-center me-5 fw-bolder text-danger'>Top Rated <AiOutlineRise/></h3>
                  <Card item = {ratingItems[getRandomNum()]}/> 
                </div>  
            </div>  

          </div>
        </div>
    </div>
  )
}

export default HomePage