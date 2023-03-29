import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imagem1 from '../public/carrossel/1.jpg'
import imagem2 from '../public/carrossel/2.png'
import imagem3 from '../public/carrossel/3.jpeg'
import Image from 'next/image';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel showArrows={true} autoPlay interval={3000}infiniteLoop transitionTime={800}>
                    <div className=" h-96 md:h-[500px]">
                        <Image src={imagem1} alt="imagem1"
                        />
                    </div>
                    <div  className=" h-96 md:h-[500px]">
                        <Image src={imagem2} alt="imagem2" 
                        className=""/>
                    </div>
                    <div className="h-96 md:h-[500px]">
                        <Image src={imagem3} alt="imagem3" 
                        />
                    </div>

                </Carousel>

            </div>
        );
    }
};