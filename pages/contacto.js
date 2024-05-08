/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Head from 'next/head'
import axios from "axios"
import Drawerside from '../components/drawerside'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Contacto() {
    const [status, setStatus]=useState('iddle');

    const Userdata = async event => {
        event.preventDefault()
        setStatus('sending')

        let userdata= {
            asunto: event.target.asunto.value,
            name: event.target.name.value,
            mail: event.target.email.value,
            message: event.target.message.value
        }

        axios.post('/api/email', {
            body: userdata
        }).then((onfulfilled) => {
            console.log('Response succeeded!')
            console.log(onfulfilled);
            setStatus('sent')
        },
        (onrejected) => {
            console.log('Response failed with err -> : ');
            console.log(onrejected);
            setStatus('error')
        }
        ).catch((onerror) => {
            console.log('Response failed with err -> : ');
            console.log(onerror);
            setStatus('error')
        });
    }
    return(
        <>
        <Head>
            <title>Puerto Imágenes Médicas Mar del Plata · contacto 223-5681552</title>
        </Head>
        <div className='drawer '>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="flex flex-col w-screen drawer-content">

        <Header />

        <main className="flex flex-col bg-[#fff] w-full min-w-screen">
        {/* slider */}
            <div className='flex flex-col h-auto'>
                <div className="flex flex-col items-center justify-center w-full h-auto py-6 xl:py-10 bg-mainpim">
                    <h1 className="text-2xl font-bold leading-tight text-center sm:text-3xl text-[#fff]">
                        CONTACTO
                    </h1>
                    <span className="text-2xl text-center text-[#fff]" />
                </div>
            </div>

            {/* content */}
            <div className="flex justify-center w-full p-8 mb-8 lg:px-0 lg:max-w-[1120px] m-auto text-lg leading-5">
                <div className="flex flex-col lg:flex-row w-full max-w-[1024px] gap-[15%]">
                    <div className="w-full lg:w-[60%]">
                        {status === 'sent' ? (
                            <div className="text-center">
                                <div className="w4rAnimated_checkmark">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                    <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                                    <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                    </svg>
                                </div>
                                <h1 className="my-2 text-xl font-bold leading-tight">
                                    Gracias por ponerte en contacto con nosotros!
                                </h1>
                            </div>
                        ) : (
                            <>
                                <h1 className="mb-2 text-xl font-bold leading-tight">
                                    Contáctenos
                                </h1>
                                <div className="text-[15px] font-light text-left my-4">
                                    Por consultas o sugerencias, complete el <br />
                                    formulario a continuación y recibirá una <br />
                                    pronta respuesta. ¡Estamos para atenderlo!
                                </div>
                                <form className="flex flex-col items-center" onSubmit={(ev) => Userdata(ev)}>
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <label htmlFor="name" className="text-2xl font-bold leading-tight text-center sm:text-2xl text-[#fff]">
                                            Nombre Completo
                                        </label>
                                        <input required className="text-base w-full p-3 rounded-lg placeholder:text-mainpim placeholder:font-light font-light text-mainpim bg-[#ecece7]" type="text" name="name" id="name" placeholder="Nombre completo*" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <label htmlFor="email" className="text-2xl font-bold leading-tight text-center sm:text-2xl text-[#fff]">
                                            E-mail
                                        </label>
                                        <input required className="text-base w-full p-3 rounded-lg placeholder:text-mainpim placeholder:font-light font-light text-mainpim bg-[#ecece7]" type="email" name="email" id="email" placeholder="E-mail*" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <label htmlFor="asunto" className="text-2xl font-bold leading-tight text-center sm:text-2xl text-[#fff]">
                                            Asunto
                                        </label>
                                        <input required className="text-base w-full p-3 rounded-lg placeholder:text-mainpim placeholder:font-light font-light text-mainpim bg-[#ecece7]" type="text" name="asunto" id="asunto" placeholder="Asunto*" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <label htmlFor="message" className="text-2xl font-bold leading-tight text-center sm:text-2xl text-[#fff]">
                                            Mensaje
                                        </label>
                                        <textarea className="text-base w-full p-3 bg-[#ecece7] placeholder:text-mainpim placeholder:font-light font-light text-mainpim rounded-lg min-h-[8rem]" name="message" id="message" placeholder="Mensaje*" />
                                    </div>
                                    <div className="flex flex-row items-center justify-end w-full ">
                                        <button type="submit" disabled={status==='sending'} className="flex items-center text-[14px] font-bold leading-none uppercase rounded-lg lg:min-h-14 btn bg-mainpim border-none my-4 disabled:text-[#999] disabled:loading">
                                            Enviar Consulta
                                        </button>
                                    </div>
                                    {status === 'error' && (
                                        <div className="flex flex-col items-center justify-center w-full bg-[#f87171] rounded-lg ">
                                            <h1 className="text-2xl font-bold leading-tight text-center sm:text-2xl text-mainpim">
                                                Ha ocurrido un error, por favor intente nuevamente.
                                            </h1>
                                        </div>
                                    )}
                                </form>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col w-full lg:w-[40%] lg:pt-8" id="turnos">
                        <h1 className="mb-4 text-xl font-bold leading-tight">
                            Turnos
                        </h1>
                        <p className="mb-4 text-sm font-semibold">Para turnos comunicarse al:</p>
                        <div className="flex flex-col gap-8 py-4 mb-4">
                            <a href="tel:+5492235681552" className='inline-flex items-center gap-6 font-normal'>
                                <picture className="inline-block w-[1.5rem] h-[1.5rem] bg-contain bg-no-repeat">
                                    <svg viewBox='0 0 191 191' width="1.5rem" height="1.5rem" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}}>
                                        <g><path style={{opacity: 0}} fill="#ebebe6" d="M -0.5,0.5 C 62.8333,0.5 126.167,0.5 189.5,0.5C 189.5,63.8333 189.5,127.167 189.5,190.5C 126.167,190.5 62.8333,190.5 -0.5,190.5C -0.5,127.167 -0.5,63.8333 -0.5,0.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#263e65" d="M 173.5,143.5 C 174.051,146.807 174.384,150.14 174.5,153.5C 173.474,156.372 171.808,158.872 169.5,161C 145.222,182.616 118.889,185.283 90.5,169C 61.2801,149.446 38.7801,123.946 23,92.5C 16.6957,77.33 14.6957,61.6633 17,45.5C 22.3474,30.8061 31.514,18.9728 44.5,10C 47.7024,8.51674 51.0357,8.1834 54.5,9C 58.579,11.0751 62.079,13.9084 65,17.5C 70.4411,25.3804 75.1077,33.7137 79,42.5C 79.9369,47.4033 79.2702,52.0699 77,56.5C 71.1881,62.0681 65.1881,67.4015 59,72.5C 56.9703,78.2552 57.3037,83.9219 60,89.5C 69.2967,108.131 82.7967,122.965 100.5,134C 105.257,134.81 109.924,134.476 114.5,133C 119.833,128.333 125.167,123.667 130.5,119C 134.039,117.496 137.705,117.163 141.5,118C 154.399,123.736 165.065,132.236 173.5,143.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#65758e" d="M 173.5,143.5 C 174.972,145.117 175.639,147.117 175.5,149.5C 175.489,151.045 175.156,152.378 174.5,153.5C 174.384,150.14 174.051,146.807 173.5,143.5 Z"/></g>
                                    </svg>
                                </picture>

                                223 56 81 552
                            </a>
                            <a href="https://wa.me/5492236352000?text=Hola" className='inline-flex items-center gap-6 font-normal'>
                                <picture className="inline-block w-[1.5rem] h-[1.5rem] bg-contain bg-no-repeat">
                                    <svg viewBox="0 0 197 197" width="1.5rem" height="1.5rem" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}}>
                                        <g><path style={{opacity: 1}} fill="#fff" d="M -0.5,0.5 C 64.8333,0.5 130.167,0.5 195.5,0.5C 195.5,65.8333 195.5,131.167 195.5,196.5C 130.167,196.5 64.8333,196.5 -0.5,196.5C -0.5,131.167 -0.5,65.8333 -0.5,0.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#c1c6ca" d="M 91.5,10.5 C 95.3188,9.83443 99.3188,9.5011 103.5,9.5C 107.893,9.5093 111.893,10.176 115.5,11.5C 107.514,10.901 99.5136,10.5676 91.5,10.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#283f67" d="M 91.5,10.5 C 99.5136,10.5676 107.514,10.901 115.5,11.5C 153.662,20.4951 176.828,44.1618 185,82.5C 188.367,127.965 169.2,159.465 127.5,177C 112.296,181.771 96.9624,182.605 81.5,179.5C 79.4855,178.076 77.1522,177.41 74.5,177.5C 68.8572,175.93 63.3572,173.93 58,171.5C 43.5095,175.248 29.0095,178.914 14.5,182.5C 17.4495,167.869 21.1161,153.369 25.5,139C 8.33634,104.297 11.1697,71.4635 34,40.5C 49.2079,22.9788 68.3746,12.9788 91.5,10.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#abb3bc" d="M 106.5,25.5 C 99.1507,25.5488 91.8174,25.8822 84.5,26.5C 91.7768,24.4811 99.1102,24.1478 106.5,25.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#fff" d="M 106.5,25.5 C 138.349,29.5103 159.183,46.8437 169,77.5C 175.533,110.245 165.366,136.411 138.5,156C 121.747,165.793 103.747,169.126 84.5,166C 75.9019,163.361 67.5685,160.194 59.5,156.5C 51.341,157.873 43.341,159.873 35.5,162.5C 35.1667,161.833 34.8333,161.167 34.5,160.5C 36.6623,152.85 38.6623,145.183 40.5,137.5C 40.3333,136.167 40.1667,134.833 40,133.5C 24.3911,107.298 24.7244,81.2983 41,55.5C 51.8691,40.1646 66.3691,30.4979 84.5,26.5C 91.8174,25.8822 99.1507,25.5488 106.5,25.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#283f66" d="M 66.5,56.5 C 69.8499,56.335 73.1832,56.5017 76.5,57C 80.4391,63.3822 83.4391,70.2155 85.5,77.5C 83.5562,81.8878 81.2229,86.0545 78.5,90C 84.9347,102.433 94.6014,111.433 107.5,117C 109.167,117.667 110.833,117.667 112.5,117C 114.333,114.5 116.167,112 118,109.5C 119.117,107.876 120.617,106.876 122.5,106.5C 129.283,109.391 135.949,112.558 142.5,116C 144.015,126.274 139.682,132.94 129.5,136C 115.568,137.58 102.902,134.247 91.5,126C 79.5789,117.414 69.7455,106.914 62,94.5C 55.8359,84.3953 55.1692,74.0619 60,63.5C 61.728,60.6703 63.8947,58.337 66.5,56.5 Z"/></g>
                                        <g><path style={{opacity: 1}} fill="#5f6f8b" d="M 74.5,177.5 C 77.1522,177.41 79.4855,178.076 81.5,179.5C 78.8478,179.59 76.5145,178.924 74.5,177.5 Z"/></g>
                                    </svg>
                                </picture>
                                223 63 52 000
                            </a>
                            <a href="https://wa.me/5492233489143?text=Hola" className='inline-flex items-center gap-6 font-normal'>
                                <picture className="inline-block w-[1.5rem] h-[1.5rem] bg-contain bg-no-repeat">
                                <svg viewBox="40 0 115 156" width="2rem" height="2rem" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}}>
                                    <g><path style={{opacity: 1}} fill="#fff" d="M -0.5,0.5 C 51.5,0.5 103.5,0.5 155.5,0.5C 155.5,38.5 155.5,76.5 155.5,114.5C 103.5,114.5 51.5,114.5 -0.5,114.5C -0.5,76.5 -0.5,38.5 -0.5,0.5 Z"/></g>
                                    <g><path style={{opacity: 1}} fill="#30476a" d="M 26.5,16.5 C 61.5016,16.3333 96.5016,16.5 131.5,17C 133,17.8333 134.167,19 135,20.5C 135.667,43.5 135.667,66.5 135,89.5C 133.786,91.0488 132.286,92.2155 130.5,93C 96.1667,93.6667 61.8333,93.6667 27.5,93C 26.3333,91.8333 25.1667,90.6667 24,89.5C 23.3333,66.1667 23.3333,42.8333 24,19.5C 25.045,18.6266 25.8783,17.6266 26.5,16.5 Z"/></g>
                                    <g><path style={{opacity: 1}} fill="#fff" d="M 29.5,22.5 C 62.8333,22.5 96.1667,22.5 129.5,22.5C 129.5,43.8333 129.5,65.1667 129.5,86.5C 96.1667,86.5 62.8333,86.5 29.5,86.5C 29.5,65.1667 29.5,43.8333 29.5,22.5 Z"/></g>
                                    <g><path style={{opacity: 1}} fill="#2a4366" d="M 34.5,27.5 C 36.1992,27.3398 37.8659,27.5065 39.5,28C 52.3921,38.5633 65.5588,48.73 79,58.5C 92.1072,49.064 104.941,39.2306 117.5,29C 120.714,26.5557 123.048,27.0557 124.5,30.5C 124.124,32.3829 123.124,33.8829 121.5,35C 108.215,44.6171 95.2149,54.6171 82.5,65C 81.2713,65.7811 79.938,66.2811 78.5,66.5C 63.2617,55.4377 48.4284,43.771 34,31.5C 33.4209,30.0715 33.5876,28.7382 34.5,27.5 Z"/></g>
                                </svg>
                                </picture>
                                <span className=' text-[14px] sm:text-base break-words w-full pr-6'>contacto@puertoimagenes.com.ar</span>
                            </a>
                            <a href="https://www.google.com/maps/place/Bermejo+446,+B7603BQJ+Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.043407,-57.5489029,16.57z/data=!4m5!3m4!1s0x9584dddc17ab7d91:0x3b61c42a3c3d9848!8m2!3d-38.0432993!4d-57.5467391" className='inline-flex items-center gap-6 font-normal' target="_blank" rel="noreferrer">
                                <picture className="inline-block w-[1.5rem] h-[1.8rem] bg-contain bg-no-repeat">
                                <svg viewBox="0 10 140 125" width="1.8rem" height="1.8rem" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} >
                                <g><path style={{opacity: 1}} fill="#fff" d="M -0.5,0.5 C 46.1667,0.5 92.8333,0.5 139.5,0.5C 139.5,41.8333 139.5,83.1667 139.5,124.5C 92.8333,124.5 46.1667,124.5 -0.5,124.5C -0.5,83.1667 -0.5,41.8333 -0.5,0.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#264063" d="M 82.5,18.5 C 81.5084,25.6476 81.175,32.9809 81.5,40.5C 82.5,40.5 83.5,40.5 84.5,40.5C 93.8028,42.7277 103.136,44.8944 112.5,47C 116.24,50.0154 116.406,53.182 113,56.5C 112.667,74.1667 112.333,91.8333 112,109.5C 82.9052,110.662 53.7385,110.828 24.5,110C 23.6711,81.9053 23.1711,53.7386 23,25.5C 20.7453,22.275 21.2453,19.6083 24.5,17.5C 31.5544,17.1829 38.5544,16.3495 45.5,15C 46.4158,14.7216 47.0825,14.2216 47.5,13.5C 57.6385,11.7893 67.8052,10.1226 78,8.5C 84.1819,9.8575 85.6819,13.1908 82.5,18.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#455b79" d="M 47.5,13.5 C 47.0825,14.2216 46.4158,14.7216 45.5,15C 38.5544,16.3495 31.5544,17.1829 24.5,17.5C 31.9487,15.6465 39.6154,14.3132 47.5,13.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#79899f" d="M 82.5,18.5 C 81.9238,26.111 82.5905,33.4444 84.5,40.5C 83.5,40.5 82.5,40.5 81.5,40.5C 81.175,32.9809 81.5084,25.6476 82.5,18.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#fff" d="M 68.5,21.5 C 70.5,21.5 72.5,21.5 74.5,21.5C 74.5,48.8333 74.5,76.1667 74.5,103.5C 69.1667,103.5 63.8333,103.5 58.5,103.5C 58.5,97.8333 58.5,92.1667 58.5,86.5C 54.6286,86.185 50.9619,86.5184 47.5,87.5C 47.5,92.8333 47.5,98.1667 47.5,103.5C 41.8333,103.5 36.1667,103.5 30.5,103.5C 30.5,77.8333 30.5,52.1667 30.5,26.5C 43.2071,25.0961 55.8738,23.4295 68.5,21.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#bcc5cf" d="M 68.5,21.5 C 70.6074,20.5318 72.9407,20.1984 75.5,20.5C 75.5,48.5 75.5,76.5 75.5,104.5C 69.642,104.822 63.9753,104.489 58.5,103.5C 63.8333,103.5 69.1667,103.5 74.5,103.5C 74.5,76.1667 74.5,48.8333 74.5,21.5C 72.5,21.5 70.5,21.5 68.5,21.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#213c60" d="M 47.5,30.5 C 50.8333,30.5 54.1667,30.5 57.5,30.5C 57.5,33.5 57.5,36.5 57.5,39.5C 54.1667,39.5 50.8333,39.5 47.5,39.5C 47.5,36.5 47.5,33.5 47.5,30.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#8291a5" d="M 47.5,30.5 C 50.9619,29.5184 54.6286,29.185 58.5,29.5C 58.5,33.1667 58.5,36.8333 58.5,40.5C 54.6286,40.815 50.9619,40.4816 47.5,39.5C 50.8333,39.5 54.1667,39.5 57.5,39.5C 57.5,36.5 57.5,33.5 57.5,30.5C 54.1667,30.5 50.8333,30.5 47.5,30.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#243e62" d="M 57.5,48.5 C 57.5,51.8333 57.5,55.1667 57.5,58.5C 54.1667,58.5 50.8333,58.5 47.5,58.5C 47.5,55.1667 47.5,51.8333 47.5,48.5C 50.8333,48.5 54.1667,48.5 57.5,48.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#78889e" d="M 86.5,52.5 C 85.1667,52.5 83.8333,52.5 82.5,52.5C 82.5,69.5 82.5,86.5 82.5,103.5C 81.5033,86.3414 81.17,69.008 81.5,51.5C 83.4147,51.2155 85.0813,51.5489 86.5,52.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#fff" d="M 86.5,52.5 C 92.7948,53.9902 99.1282,55.3235 105.5,56.5C 105.5,72.1667 105.5,87.8333 105.5,103.5C 102.833,103.5 100.167,103.5 97.5,103.5C 97.5,100.833 97.5,98.1667 97.5,95.5C 95.1667,95.5 92.8333,95.5 90.5,95.5C 90.5,98.1667 90.5,100.833 90.5,103.5C 87.8333,103.5 85.1667,103.5 82.5,103.5C 82.5,86.5 82.5,69.5 82.5,52.5C 83.8333,52.5 85.1667,52.5 86.5,52.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#a7b1bf" d="M 57.5,48.5 C 58.4816,51.9619 58.815,55.6286 58.5,59.5C 54.6286,59.815 50.9619,59.4816 47.5,58.5C 50.8333,58.5 54.1667,58.5 57.5,58.5C 57.5,55.1667 57.5,51.8333 57.5,48.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#8a99ac" d="M 105.5,56.5 C 106.496,72.3246 106.83,88.3246 106.5,104.5C 103.287,104.81 100.287,104.477 97.5,103.5C 100.167,103.5 102.833,103.5 105.5,103.5C 105.5,87.8333 105.5,72.1667 105.5,56.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#6d7e96" d="M 96.5,66.5 C 96.5,64.8333 96.5,63.1667 96.5,61.5C 94.8333,61.5 93.1667,61.5 91.5,61.5C 91.5,63.1667 91.5,64.8333 91.5,66.5C 90.5386,64.7354 90.2053,62.7354 90.5,60.5C 92.8333,60.5 95.1667,60.5 97.5,60.5C 97.7947,62.7354 97.4614,64.7354 96.5,66.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#1e395e" d="M 96.5,66.5 C 94.8333,66.5 93.1667,66.5 91.5,66.5C 91.5,64.8333 91.5,63.1667 91.5,61.5C 93.1667,61.5 94.8333,61.5 96.5,61.5C 96.5,63.1667 96.5,64.8333 96.5,66.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#213c60" d="M 47.5,67.5 C 50.8333,67.5 54.1667,67.5 57.5,67.5C 57.5,70.5 57.5,73.5 57.5,76.5C 54.1667,76.5 50.8333,76.5 47.5,76.5C 47.5,73.5 47.5,70.5 47.5,67.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#7f8fa4" d="M 47.5,67.5 C 50.9619,66.5184 54.6286,66.185 58.5,66.5C 58.5,70.1667 58.5,73.8333 58.5,77.5C 54.6286,77.815 50.9619,77.4816 47.5,76.5C 50.8333,76.5 54.1667,76.5 57.5,76.5C 57.5,73.5 57.5,70.5 57.5,67.5C 54.1667,67.5 50.8333,67.5 47.5,67.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#6b7c95" d="M 96.5,77.5 C 96.5,75.8333 96.5,74.1667 96.5,72.5C 94.8333,72.5 93.1667,72.5 91.5,72.5C 91.5,74.1667 91.5,75.8333 91.5,77.5C 90.5386,75.7354 90.2053,73.7354 90.5,71.5C 92.8333,71.5 95.1667,71.5 97.5,71.5C 97.7947,73.7354 97.4614,75.7354 96.5,77.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#1e3a5e" d="M 96.5,77.5 C 94.8333,77.5 93.1667,77.5 91.5,77.5C 91.5,75.8333 91.5,74.1667 91.5,72.5C 93.1667,72.5 94.8333,72.5 96.5,72.5C 96.5,74.1667 96.5,75.8333 96.5,77.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#6b7c95" d="M 96.5,88.5 C 96.5,86.8333 96.5,85.1667 96.5,83.5C 94.8333,83.5 93.1667,83.5 91.5,83.5C 91.5,85.1667 91.5,86.8333 91.5,88.5C 90.5386,86.7354 90.2053,84.7354 90.5,82.5C 92.8333,82.5 95.1667,82.5 97.5,82.5C 97.7947,84.7354 97.4614,86.7354 96.5,88.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#1f3a5e" d="M 96.5,88.5 C 94.8333,88.5 93.1667,88.5 91.5,88.5C 91.5,86.8333 91.5,85.1667 91.5,83.5C 93.1667,83.5 94.8333,83.5 96.5,83.5C 96.5,85.1667 96.5,86.8333 96.5,88.5 Z"/></g>
                                <g><path style={{opacity: 1}} fill="#8997aa" d="M 47.5,87.5 C 50.9619,86.5184 54.6286,86.185 58.5,86.5C 58.5,92.1667 58.5,97.8333 58.5,103.5C 57.5119,98.3595 57.1786,93.0262 57.5,87.5C 54.1667,87.5 50.8333,87.5 47.5,87.5 Z"/></g>
                                </svg>
                                </picture>
                                Bermejo 446 | Mar del Plata (7600)
                            </a>
                            <p className="pb-8">
                                <a href="https://www.google.com/maps/place/Puerto+Imagenes+Medicas/@-38.043407,-57.5489029,16z/data=!4m13!1m7!3m6!1s0x9584dddc17ab7d91:0x3b61c42a3c3d9848!2sBermejo+446,+B7603BQJ+Mar+del+Plata,+Provincia+de+Buenos+Aires!3b1!8m2!3d-38.0432993!4d-57.5467391!3m4!1s0x9584dd071373a8fb:0x9fe1b7523fd7fd2a!8m2!3d-38.0432993!4d-57.5467391" className='inline-flex items-center mb-10 font-normal' target="_blank" rel="noreferrer">
                                    <button className="ml-12 flex items-center w-fit text-[14px] font-bold leading-none uppercase rounded-lg lg:min-h-14 btn bg-mainpim border-none my-4">
                                        Cómo llegar
                                    </button>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />

        </div>
        <Drawerside />
    </div>
    </>
    )
}
