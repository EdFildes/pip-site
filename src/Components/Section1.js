import React from 'react'
import './Section1.css'
import $ from 'jquery'
import Slider from "react-slick"
import WOW from 'wowjs'
import "./../../node_modules/slick-carousel/slick/slick.css";
import "./../../node_modules/slick-carousel/slick/slick-theme.css";

let styling = {
  color: 'black'
}

class Section1 extends React.Component {
    componentDidMount() {
      new WOW.WOW(
        {
          offset: 160
        }
      ).init();
    }

    render() {
      var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        afterChange: index => console.log("changed")
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="image-container">
                <a className="image1">
                  <div className="textBox box1">
                    <div className="line lineL"></div>
                  SOME REALLY BIG TEXT THAT SAYS SOMETHING
                    <div className="line lineL"></div>
                  </div>
                  <img alt="" className="dot-overlay"></img>
                </a>
            </div>
            <div class="image-container">
                <a className="image2">
                  <div className="textBox box1">
                    <div className="line lineL"></div>
                  SOME LARGE TEXT THAT SAYS SOMETHING ELSE
                    <div className="line lineL"></div>
                  </div>
                  <img alt="" className="dot-overlay"></img>                  
                </a>
            </div><div className="image-container">
                <a className="image3">
                  <div className="textBox box2">
                    <div className="line lineR"></div>
                  TEXT THAT SAYS SOMETHING THAT IS LARGE IN SIZE
                    <div className="line lineR"></div>
                  </div>
                  <img alt="" className="dot-overlay"></img>
                </a>
            </div><div className="image-container">
                <a className="image4">
                  <div className="textBox box2">
                    <div className="line lineR"></div>
                  HErss some txt
                    <div className="line lineR"></div>
                  </div>
                  <img alt="" className="dot-overlay"></img>  
                </a>
            </div>

          </Slider>
        </div>
      );
    }
  }

export default Section1;