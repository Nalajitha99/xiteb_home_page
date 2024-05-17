import React from 'react';
import '../Styles/NewsSection.css';
import NewsImg1 from "../Resources/N1.jpg"
import NewsImg2 from "../Resources/N2.jpg"
import NewsImg3 from "../Resources/N3.jpg"
import NewsImg4 from "../Resources/N4.jpg"


const NewsSection = () => {

  return (
    <>
    <h1 style={{color:"rgb(72, 140, 212)", textAlign:"center", marginBottom:"5px"}}>LATEST NEWS</h1>
    <h5 style={{color:"black", textAlign:"center", marginBottom:"5px"}}>INTEGER CONGUEELIT</h5>
    <div className='container1'>
        <div className="news-section1">
            <button className="custom-button">
                <div className="left-column">
                    <img src={NewsImg1} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description">CURABITUR LOREM UISM QUIS</h1>
                    <h2>Admin</h2>
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec</p>
                </div>
            </button>
        </div>
        <div className="news-section2">
            <button className="custom-button">
                <div className="left-column">
                    <img src={NewsImg2} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description">CURABITUR LOREM UISM QUIS</h1>
                    <h2>Admin</h2>
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec</p>
                </div>
            </button>
        </div>
        <div className="news-section2">
            <button className="custom-button">
                <div className="left-column">
                    <img src={NewsImg3} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description">CURABITUR LOREM UISM QUIS</h1>
                    <h2>Admin</h2>
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec</p>
                </div>
            </button>
        </div>
        <div className="news-section2">
            <button className="custom-button">
                <div className="left-column">
                    <img src={NewsImg4} alt="Button Image" className="button-image" />
                </div>
                <div className="right-column">
                    <h1 className="description">CURABITUR LOREM UISM QUIS</h1>
                    <h2>Admin</h2>
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec</p>
                </div>
            </button>
        </div>
    </div>
    </>
  );
};

export default NewsSection;
