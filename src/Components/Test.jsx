import React from 'react'
import '../Styles/Test.css'

export default function Test() {
  return (
    <div className='test'>
        <div className='container1'>
            <h2>trusted clients</h2>
                <p className='p1'>lorem ipsum dolor sit amet consectetur</p>
                <div className='text'>
                  Integer congue elit non semper laoreet sed lectus orci posuer nisi
                  tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis
                  vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada
                  maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum.
                </div>
                <div className='shape1'>"</div>
                <div className='shape2'></div>
                <div className='name'>
                  <p><span style={{fontSize:"20px",fontWeight:"bold"}}>John Doe</span><br/>Managing Director</p>
                </div>
        </div>
        <div className='container2'>
            <h2>why choose us</h2>
            <p className='p1'>lorem ipsum dolor sit amet consectetur</p>
              
              <hr/>
              <p className='para'>Dui ac hendrerit elementum quam ipsum auctor lorem<button className='icon'>+</button></p>
              <hr/>
              <p className='para'>Mauris vel magna a est lobortis volutpat<button className='icon'>+</button></p>
              <hr/>
              <p className='para'>Sed bibendum ornare lorem mauris feugiat suspendisse neque<button className='icon'>+</button></p>
              <hr/>
              <p className='para'>Nulia scelerisque dul hendrerit elementum quam<button className='icon'>+</button></p>
              <hr/>
        </div>  
    </div>
  )
}