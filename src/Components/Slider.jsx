import React from 'react'
import "../Styles/Slider.css";
import TurkishCargo from "../Resources/TurkishCargo.jpg";
import Dhl from "../Resources/Dhl.jpeg";
import Fedex from "../Resources/Fedex.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const data = [
        {
            title: `Turkish Cargo`,
            img: `${TurkishCargo}`,
            review: `Turkish Cargo carries a whole world of goods to more countries than any other airline. We provide cargo service to over 2,000 destinations all over the world with the utmost in expediency and efficiency.`
        },
        {
            title: `DHL Cargo`,
            img: `${Dhl}`,
            review: `Explore DHL Global Forwarding's fast, flexible, reliable DHL Air Freight services, including standard air cargo, same day, temperature controlled.`
        },
        {
            title: `Fedex Cargo`,
            img: `${Fedex}`,
            review: `FedEx's international air freight forwarding services offer speed, simplicity, and seamless distribution for businesses seeking reliable global logistics solutions. `
        }
    ];

  return (
    <div className="card">
        <div className="mt-10">
            <Slider {...settings}>
            {data.map((d) => (
               <div className="card-content">
                    <div className="image">
                        <img src={d.img} alt=""/>
                    </div>
                    <div className="text">
                        <h1>{d.title}</h1>
                        <p>{d.review}</p>
                        <button>Discover More</button>
                    </div>
               </div>
            ))}
            </Slider>
        </div>

    </div>
  )
}

export default Sliders