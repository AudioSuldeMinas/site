import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import depoimentos from '../public/carrossel/1.jpg'
import Image from 'next/image';

export default class NextJsCarouselDepoimentos extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div className=" h-96  flex items-center justify-center">
                        <div className='w-[680px] flex flex-col justify-center items-center bg-white pb-2'>
                            <Image src={depoimentos} className='w-[820px] h-32'/>
                            <h2 className='p-2 text-tema-site font-bold text-2xl'>Clentes e Testemulhos</h2>
                            <p className=' mb-5 text-center mx-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt voluptatem deleniti .</p>
                            
                        </div>
                    </div>
                    <div className=" h-96  flex items-center justify-center">
                        <div className='w-[680px] flex flex-col justify-center items-center bg-white pb-2'>
                            <Image src={depoimentos} className='w-[820px] h-32'/>
                            <h2 className='p-2 text-tema-site font-bold text-2xl'>Clentes e Testemulhos</h2>
                            <p className=' mb-5 text-center mx-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt voluptatem deleniti .</p>
                            
                        </div>
                    </div>
                    <div className=" h-96  flex items-center justify-center">
                        <div className='w-[680px] flex flex-col justify-center items-center bg-white pb-2'>
                            <Image src={depoimentos} className='w-[820px] h-32'/>
                            <h2 className='p-2 text-tema-site font-bold text-2xl'>Clentes e Testemulhos</h2>
                            <p className=' mb-5 text-center mx-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt voluptatem deleniti .</p>                       
                        </div>
                    </div>
                </Carousel>

            </div>
        );
    }
};