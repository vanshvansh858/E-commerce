import React, { useState } from 'react'
import useCart from '../hooks/use-cart'
import Card from '../components/Card';
import Placeholder from '../components/Placeholder';

const ResultsPage = () => {

    const {items} = useCart(); 
    const [pagingIndex, setPagingIndex] = useState({
        startIndex : 0,
        endIndex : 6,
    }) 

    // Pagination - Logic : divide pages in such a way each page has 6 Cards, every page btn has an index which filters the 'items' array accordingly
    const handleClick = (event) => {           
        setPagingIndex({...pagingIndex, startIndex: Number(event.target.value) + Number(event.target.value) * 5, endIndex: Number(event.target.value) + Number(event.target.value) * 5 + 6})
    }
    
    // Placeholders for Cards after searching or shopping from catregories

    const placeholders = Array(6).fill(
        <div className='col-lg-4 col-md-6 col-sm-12'  style={{'width': 'fit-content'}}>
            <Placeholder /> 
        </div> )

    // Mapping over 'items' array

    const renderedItems = items.map( (product, i) => { 
            if(i >= pagingIndex.startIndex && i < pagingIndex.endIndex)
            {
                return( 
                <div className='col-lg-4 col-md-6 col-sm-12'  style={{'width': 'fit-content'}}>
                    <Card item = {product}/>    
                </div>) 
            }
    })  


    
    const pagingBtns = []
    
    for(let j = 0; j < Math.ceil(items.length / 6) ;j++)
    { 
        pagingBtns.push(<button onClick={handleClick} value={j} type="button" class="page-link bg-danger text-white btn me-2">{j + 1}</button>)
    }  

    return(
        <div className='container'>     
            <div className='row mt-4'> 
                <ul className='pagination justify-content-center pagination-white'>
                    <div class="btn-toolbar  " role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group  me-2" role="group" aria-label="First group">  
                                {pagingBtns} 
                        </div>
                    </div>

                </ul>
            </div>

            <div className='row justify-content-center mt-4'>
                {items.length > 0 ? renderedItems : placeholders}
            </div>

        </div>
    )
}

export default ResultsPage