import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsImg1 from "../Resources/N1.jpg"
import NewsImg2 from "../Resources/N2.jpg"
import NewsImg3 from "../Resources/N3.jpg"
import NewsImg4 from "../Resources/N4.jpg"
import "../Styles/OurServices.css"


const OurServices = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", listStyleType:"circle"}}> {dots} </ul>
            </div>
        )
    };

  return (
    <>
    <div>
        <h5 style={{color:"lightgreen",textAlign:"center",fontSize:"20px"}}>Real Solutions, Real Fast!</h5>
        <h1 style={{color:"darkblue",fontFamily:"sans-serif",fontSize:"40px",textAlign:"center"}}>Best Global Logistics Solutions</h1>
    </div>
    <div className="card1">
        <div className=''>
            <Slider {...settings}>
            <div className="news-section1">
            <div className="custom-button1">
                <div className="left-column">
                    <img src={NewsImg1} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description" style={{color:"black",fontWeight:"bold",fontSize:"25px"}}>Air Frieght Services</h1>
                    <p>At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.</p>
                    <ul>
                        <li><a href="">Read More</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="news-section2">
            <div className="custom-button1">
                <div className="left-column">
                    <img src={NewsImg2} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description" style={{color:"black",fontWeight:"bold",fontSize:"25px"}}>Air Frieght Services</h1>
                    <p>At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.</p>
                    <ul>
                        <li><a href="">Read More</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="news-section2">
            <div className="custom-button1">
                <div className="left-column">
                    <img src={NewsImg3} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description" style={{color:"black",fontWeight:"bold",fontSize:"25px"}}>Drone Services</h1>
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec</p>
                    <ul>
                        <li><a href="">Read More</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="news-section2">
            <div className="custom-button1">
                <div className="left-column">
                    <img src={NewsImg4} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description" style={{color:"black",fontWeight:"bold",fontSize:"25px"}}>Logistics Services</h1>
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec</p>
                    <ul>
                        <li><a href="">Read More</a></li>
                    </ul>
                </div>
            </div>
        </div>
            </Slider>

        </div>
    </div>
    </>
  )
}

export default OurServices