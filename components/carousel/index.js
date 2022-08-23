/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import SwiperCore, { Autoplay, Pagination, EffectFade  } from "swiper";
import { Swiper, SwiperSlide,  } from "swiper/react";
import Link from 'next/link'

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
                delay: 3500,
            }}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            }}
        >
            <SwiperSlide>
                <div className="relative w-full h-[600px] lg:min-h-0">
                    <img src="assets/images/home.jpeg" alt="Vista del instituto" className="object-cover object-center w-full h-full"/>
                </div>
            </SwiperSlide>
            {/* estamos mas cerca */}
            <SwiperSlide>
                <div className="relative w-full h-[600px] lg:min-h-0">
                    <div className="absolute flex lg:pl-[12%] lg:pt-[6%] flex-col w-full h-full gap-8 lg:gap-2 p-4 sm:p-8 text-left text-[#fff] drop-shadow-strong sm:drop-shadow-lg lg:drop-shadow-none lg:text-mainpim lg:w-2/5 lg:left-0 ">
                        <div className="flex flex-col">
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-none 2lg:text-[3.7rem] xl:text-[5rem] ">
                                ESTAMOS<br />
                                MÁS CERCA<br />
                            </h1>
                            <h2 className="text-primpim text-3xl md:text-5xl font-extrabold leading-none lg:pt-2 2lg:text-[2.6rem] xl:text-[4rem] ">ZONA PUERTO</h2>
                        </div>
                        <div className="font-bold ">
                            Queremos estar cerca, en &quot;tu barrio&quot;<br />
                            trabajando y comprometiéndonos a<br />
                            brindarte una buena atención
                        </div>
                        <div className="flex flex-row flex-end ">
                            <Link href="/instituto">
                                <button className="w-[100px] text-base p-1 ml-auto border-none btn bg-lightpim">
                                    <span className="drop-shadow-strong">VER MÁS</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <img src="assets/images/slide-3.png" alt="Instituto en zona puerto" className="object-cover object-right w-full h-full"/>
                </div>
            </SwiperSlide>
            {/* nuevo resonador */}
            <SwiperSlide>
                <div className="relative w-full h-[600px] lg:min-h-0">
                    <div className="absolute flex flex-col w-full h-full gap-8 lg:gap-2 p-4 sm:p-8 text-left text-[#fff] drop-shadow-strong sm:drop-shadow-lg lg:drop-shadow-none lg:text-mainpim lg:w-2/5 lg:left-0 ">
                        <div className="flex flex-col">
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-none 2lg:text-[4rem] xl:text-[5rem] ">
                                NUEVO<br />
                                RESONADOR<br />
                            </h1>
                            <h2 className="text-3xl md:text-5xl font-extrabold leading-none 2lg:text-[3rem] xl:text-[4rem] ">EN ZONA PUERTO</h2>
                        </div>
                        <div className=""/>
                        <div className="">
                            <Link href="/resonancia">
                                <button className="w-[100px] text-base p-1 ml-auto lg:ml-0 border-none btn bg-lightpim">
                                    <span className="drop-shadow-strong">VER MÁS</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <img src="assets/images/slide-2.png" alt="Nuevo resonador magnetico" className="object-cover object-right w-full h-full"/>
                </div>
            </SwiperSlide>
            {/* tus estudios mas cerca (a mano) */}
            <SwiperSlide>
                <div className="relative w-full h-[600px] lg:min-h-0">
                    <div className="absolute flex flex-col w-full h-full gap-8 lg:gap-2 p-4 text-right text-[#fff] drop-shadow-strong lg:drop-shadow-none lg:text-mainpim lg:w-2/5 lg:right-0 lg:text-left">
                        <div className="flex flex-col">
                            <div className="flex flex-1"/>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-none 2lg:text-[4rem] xl:text-[5rem] ">
                                TENÉ<br />
                                TUS ESTUDIOS<br />
                                MÁS CERCA
                            </h1>
                        </div>
                        <div className="">
                            <h2 className="text-lg leading-none xl:my-2 md:text-xl 2xl:lg:text-2xl md:font-medium xl:font-semibold">Portal de estudios</h2>
                        </div>
                        <div className="">
                            ¡Visualizá y compartí tus estudios de<br />
                            manera Online desde tu compu o tu<br />
                            celular!
                        </div>
                        <div className="">
                            <Link href="/misestudios">
                                <button className="w-[100px] text-base p-1 ml-auto lg:ml-0 border-none btn bg-lightpim">
                                    <span className="drop-shadow-strong">VER MÁS</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <img src="assets/images/slide-1.png" alt="tus estudios mas cerca" className="object-cover object-left w-full h-full"/>
                </div>
            </SwiperSlide>
            <div className="h-8 swiper-pagination" />
        </Swiper>
    );
}

{/* 
    // plantita 
    <SwiperSlide>
        <div className="relative w-full h-[600px] lg:min-h-0">
            <div className="absolute flex flex-col w-full h-full gap-2 px-6 py-8 text-right text-[#fff] drop-shadow-strong lg:drop-shadow-none lg:text-greenpim lg:w-1/2 lg:right-0 lg:text-left">
                <div className="h-[20%] lg:h-[50%] flex flex-col">
                    <div className="flex flex-1"/>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-none 2lg:text-[3rem] xl:text-[5rem] ">
                        CUIDEMOS<br />
                        EL PLANETA
                    </h1>
                </div>
                <h2 className="text-lg leading-none xl:my-2 md:text-xl 2lg:text-4xl md:font-medium lg:font-bold text-lightgreenpim">ESTUDIOS DIGITALES</h2>
                <div className="h-[20%]">
                    Puerto imagenes piensa en el medio ambiente es por eso<br />
                    que nuestros estudios son digitales.
                </div>
                <div className="h-[20%] -mt-4 sm:mt-0">
                    Respetemos el planeta juntos.
                </div>
            </div>
            <img src="assets/images/slide-5.png" alt="mis estudios" className="object-cover object-left w-full h-full lg:object-center "/>
        </div>
    </SwiperSlide>
*/}

export default Carousel;
