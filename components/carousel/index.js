/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import SwiperCore, { Autoplay, Pagination, EffectFade  } from "swiper";
import { Swiper, SwiperSlide,  } from "swiper/react";

import 'swiper/css';
import "swiper/css/pagination";


function Carousel() {
    SwiperCore.use([Autoplay, Pagination, EffectFade]);

    return (
        <Swiper
            className="w-full min-w-screen"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
            }}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            }}
        >
            <SwiperSlide>
                <div className="relative w-full h-full min-h-screen lg:min-h-0">
                    <div className="absolute flex flex-col w-full h-full gap-2 p-8 text-right text-[#fff] drop-shadow-strong lg:drop-shadow-none lg:text-mainpim lg:w-1/2 lg:right-0 lg:text-left">
                        <div className="h-[20%] lg:h-[50%] flex flex-col">
                            <div className="flex flex-1"/>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-none 2lg:text-[4rem] xl:text-[5rem] ">
                                TENÉ<br />
                                TUS ESTUDIOS<br />
                                MÁS CERCA
                            </h1>
                        </div>
                        <div className="h-[10%]">
                            <h2 className="text-lg leading-none xl:my-2 md:text-xl 2xl:lg:text-2xl md:font-medium xl:font-semibold">Portal de estudios</h2>
                        </div>
                        <div className="h-[20%]">
                            ¡Visualizá y compartí tus estudios de<br />
                            manera Online desde tu compu o tu<br />
                            celular!
                        </div>
                        <div className="h-[20%] -mt-4 sm:mt-0">
                            <button className="w-[100px] text-base p-1 ml-auto lg:ml-0 border-none btn bg-lightpim">VER MÁS</button>
                        </div>
                    </div>
                    <img src="assets/images/slide-1.png" alt="slide 1" className="object-cover object-left w-full h-[75%] lg:h-full lg:object-cover"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full min-h-screen lg:min-h-0">
                    <div className="absolute flex flex-col w-full h-full gap-2 p-4 sm:p-8 text-left text-[#fff] drop-shadow-strong sm:drop-shadow-lg lg:drop-shadow-none lg:text-mainpim lg:w-1/2 lg:left-0 ">
                        <div className="h-[20%] lg:h-[50%] flex flex-col">
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-none 2lg:text-[4rem] xl:text-[5rem] ">
                                NUEVO<br />
                                RESONADOR<br />
                            </h1>
                            <h2 className="text-3xl md:text-5xl font-extrabold leading-none 2lg:text-[3rem] xl:text-[4rem] ">EN ZONA PUERTO</h2>
                        </div>
                        <div className="h-[10%]"/>
                        <div className="h-[40%] -mt-4 sm:mt-0">
                            <button className="w-[100px] text-base p-1 ml-auto lg:ml-0 border-none btn bg-lightpim">VER MÁS</button>
                        </div>
                    </div>
                    <img src="assets/images/slide-2.png" alt="slide 1" className="object-cover object-right w-full h-[85%] lg:h-full lg:object-cover"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full min-h-screen lg:min-h-0">
                    <div className="absolute flex lg:pl-[12%] lg:pt-[6%] flex-col w-full h-full gap-2 p-4 sm:p-8 text-left text-[#fff] drop-shadow-strong sm:drop-shadow-lg lg:drop-shadow-none lg:text-mainpim lg:w-1/2 lg:left-0 ">
                        <div className="h-[20%] lg:h-[50%] flex flex-col">
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-none 2lg:text-[3.7rem] xl:text-[5rem] ">
                                ESTAMOS<br />
                                MÁS CERCA<br />
                            </h1>
                            <h2 className="text-primpim text-3xl md:text-5xl font-extrabold leading-none lg:pt-2 2lg:text-[2.6rem] xl:text-[4rem] ">ZONA PUERTO</h2>
                        </div>
                        <div className="h-[20%] font-bold leading-5">
                            Queremos estar cerca, en &quot;tu barrio&quot;<br />
                            trabajando y comprometiéndonos a<br />
                            brindarte una buena atención
                        </div>
                        <div className="flex flex-row flex-end h-[20%] -mt-2 ">
                            <button className="w-[100px] text-base p-1 ml-auto border-none btn bg-lightpim">VER MÁS</button>
                        </div>
                    </div>
                    <img src="assets/images/slide-3.png" alt="slide 1" className="object-cover object-right w-full h-[85%] lg:h-full lg:object-cover"/>
                </div>
            </SwiperSlide>
            <div className="h-8 swiper-pagination" />
        </Swiper>
    );
}



export default Carousel;
