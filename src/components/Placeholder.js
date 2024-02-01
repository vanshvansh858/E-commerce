import React from 'react'

const Placeholder = () => {
  return ( 
    <div class="card p-2" aria-hidden="true"  style={{'width': '20rem', 'border': 'none'}}>
        <div className='placeholder-img'>

        </div>
        <div class="card-body">
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
            </p>
            <button class="btn btn-danger disabled placeholder col-6" aria-disabled="true"></button>
        </div>
    </div>)
}

export default Placeholder