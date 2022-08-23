/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade  } from "swiper";
import { Swiper, SwiperSlide,  } from "swiper/react";

import 'swiper/css';


function News() {
    SwiperCore.use([Autoplay, EffectFade]);

    return (
        <Swiper
            className="w-full min-w-[320px]"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
            }}
        >
            <SwiperSlide>
                <div className="flex flex-col w-full max-w-[250px]">
                    <img src="assets/images/novedades.png" alt="news" className="object-contain w-[250px]"/>
                    <div className="flex flex-col w-full h-full gap-2">
                        <span className='text-lg font-medium'><span className="pb-1 border-b border-mainpim">No</span>vedad 1</span>
                        <p>
                            ¡Visualizá y compartí tus estudios de
                            manera Online desde tu compu o tu celular!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col w-full max-w-[250px]">
                    <img src="assets/images/novedades.png" alt="news" className="object-contain w-[250px]"/>
                    <div className="flex flex-col w-full h-full gap-2">
                        <span className='text-lg font-medium'><span className="pb-1 border-b border-mainpim">No</span>vedad 2</span>
                        <p>
                            ¡Visualizá y compartí tus estudios de
                            manera Online desde tu compu o tu celular!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col w-full max-w-[250px]">
                    <img src="assets/images/novedades.png" alt="news" className="object-contain w-[250px]"/>
                    <div className="flex flex-col w-full h-full gap-2">
                        <span className='text-lg font-medium'><span className="pb-1 border-b border-mainpim">No</span>vedad 3</span>
                        <p>
                            ¡Visualizá y compartí tus estudios de
                            manera Online desde tu compu o tu celular!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}



export default News;
