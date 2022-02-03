
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai'
import PortfolioItem from "./PortfolioItem";


function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-right"
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        right: 'calc(50% - 46px)',
        bottom: '-80px',
        zIndex: '99',
        width: '36px',
        height: '36px',
        cursor: "pointer",
        borderRadius: '5px',
        background: '#fff',
        boxShadow: "0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16)",
      }}
      onClick={onClick}
    >
      <AiOutlineRight />
    </div>
  );
}


function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-left"
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        left: 'calc(50% - 46px)',
        bottom: '-80px',
        zIndex: '99',
        width: '36px',
        height: '36px',
        cursor: "pointer",
        borderRadius: '5px',
        background: '#fff',
        boxShadow: "0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16)",
      }}
      onClick={onClick}
    >
      <AiOutlineLeft />
    </div>
  );
}


export default class Portfolio extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay: true,
      speeds: 500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Carousel>
        <div className="container">
          <h2 className="title">Portfolio</h2>
          <Slider {...settings}>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </Slider>
        </div>
      </Carousel>
    );
  }
}

const Carousel = styled.div`
 padding-bottom: 150px;
 padding-top: 100px;
 background-color: #fff;
 h2::before{
   left: 450px;
 }
`
