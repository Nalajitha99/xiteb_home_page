import React from 'react'
import "../Styles/ClientLogo.css";
import Logo1 from '../Resources/Logo1.jpg'
import Logo2 from '../Resources/Logo2.png'
import Logo3 from '../Resources/Logo3.png'
import Logo4 from '../Resources/Logo4.png'
import Logo5 from '../Resources/Logo5.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientLogo = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const data = [
        {
            img: `${Logo1}`,
        },
        {
            img: `${Logo2}`,
        },
        {
            img: `${Logo3}`,
        },
        {
            img: `${Logo4}`,
        },
        {
            img: `${Logo5}`
        }
    ];

  return (
    <div className="card1">
        <h1 style={{textAlign:"center", color:"darkblue",textShadow:"inherit"}}>Our Clients</h1>
        <div className="mt-10">
            <Slider {...settings}> 
            {data.map((d) => (
               <div className="card-content1">
                    <div className="image1">
                        <a href=""><img src={d.img} alt=""/></a>
                    </div>
               </div>
            ))}
            </Slider>
        </div>

    </div>
  )
}

export default ClientLogo