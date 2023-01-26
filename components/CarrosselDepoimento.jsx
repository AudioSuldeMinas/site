import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import depoimentos from '../public/carrossel/1.jpg'
import Image from 'next/image';

export default class NextJsCarouselDepoimentos extends Component {
    render() {
        return (
            <div>
               <Carousel showArrows={true} autoPlay interval={3000}infiniteLoop transitionTime={800}>     
                <div className=" h-96  flex items-center justify-center">
                        <div className='w-72 md:w-[680px] flex flex-col justify-center items-center bg-white'>
                            <Image src={depoimentos} alt="imagem de pessoas que deram seu depoimento" className='w-[820px] h-32'/>
                            <h2 className=' text-tema-site font-bold text-2xl'>Clentes e Testemulhos</h2>
                            <p className=' mb-5 text-center m-2 md:mx-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt voluptatem deleniti .</p>
                        </div>
                    </div>
                    <div className=" h-96  flex items-center justify-center">
                        <div className='w-72 md:w-[680px] flex flex-col justify-center items-center bg-white'>
                            <Image src={depoimentos} alt="imagem de pessoas que deram seu depoimento" className='w-[820px] h-32'/>
                            <h2 className=' text-tema-site font-bold text-2xl'>Clentes e Testemulhos</h2>
                            <p className=' mb-5 text-center m-2 md:mx-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt voluptatem deleniti .</p>
                        </div>
                    </div>
                    <div className=" h-96  flex items-center justify-center">
                        <div className='w-72 md:w-[680px] flex flex-col justify-center items-center bg-white'>
                            <Image src={depoimentos} alt="imagem de pessoas que deram seu depoimento" className='w-[820px] h-32'/>
                            <h2 className=' text-tema-site font-bold text-2xl'>Clentes e Testemulhos</h2>
                            <p className=' mb-5 text-center m-2 md:mx-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt voluptatem deleniti .</p>
                        </div>
                    </div>
                    
                </Carousel>

            </div>
        );
    }
};