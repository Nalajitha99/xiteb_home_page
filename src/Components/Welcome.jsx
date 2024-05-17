import React from 'react'
import '../Styles/Welcome.css'
import pic1 from '../Resources/pic1.jpg'
import pic2 from '../Resources/pic2.png'

export default function Welcome() {
  return (
    <div className='welcome'>
        <div className='container1'>
            <img className="img1" src={pic1 } alt="" />
            <img className="img2" src={pic2} alt="" />
            <div className="rectangle">
                <p className="text">15,350+<br/><span>Clients Worldwide</span></p>
            </div>
            <div className="triangle"></div>  
            <div className="parallelogram"></div>  
        </div>
        <div className='container2'>
              <h2>TransMax Logistics<br/>Around <span>the World</span></h2>
              <p className='para1'>Transmax is the world's driving worldwide coordinations supplier- we uphold
                industry and exchange the worldwide trade of merchandise through land transport. 
              </p>
              <p className='para2'>
                  Our worth added administrations guarantee the progression of products 
                  proceeds consistently and proficiently and supply chains stay lean and
                  streamlined for progress.
              </p>
              <button>more about us</button>
        </div>  
          
    </div>
  )
}