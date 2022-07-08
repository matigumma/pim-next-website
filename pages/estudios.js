/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'

import Carousel from '../components/carousel'

export default function Estudios() {
    return(
            <div className="">
            <Head>
                <title>Puerto Imágenes Médicas Mar del Plata </title>
                <meta name="description" content="Centro de diagnostico por imágenes en zona puerto de Mar del Plata - Bermejo 446" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='drawer '>
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 

                <div className="flex flex-col w-screen drawer-content">
                    <div className="flex flex-row navbar-end bg-[#ecece7] w-full p-6 lg:p-8 text-sm font-light">
                    {/* nav contact */}
                    <nav className="w-full md:w-auto">
                        <ul className="flex flex-row items-center justify-end gap-4 text-xs lg:gap-10 ">
                        <li>
                            <a href="tel:+5492235681552" className="flex items-center gap-2">
                                <picture className="flex bg-phone w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                                <span className='font-light'>223 56 81 552</span>
                            </a>
                        </li>
                        <li>
                            <Link href="contacto">Contacto</Link>
                        </li>
                        <li className='flex flex-row items-center gap-4'>
                            <a href="http://www.facebook.com/" target="_blank" rel="noreferrer">
                            <picture className="flex bg-f w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <picture className="flex bg-i w-[1.25rem] h-[1.25rem] leading-2 bg-contain bg-no-repeat mt-1" />
                            </a>
                        </li>
                        </ul>
                    </nav>
                    </div>

                    <header className="flex items-center justify-between w-full p-4 font-bold lg:p-6 lg:flex-row">
                    {/* logo */}
                    <Link href="/">
                        <picture className="cursor-pointer inline-block bg-logoSmall w-[100px] h-[60px] bg-contain bg-no-repeat sm:bg-logoLarge sm:w-[364.5px] sm:h-[56.7px]" />
                    </Link>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    {/* nav desktop */}
                    <nav className="items-center hidden text-lg lg:flex">
                        <ul className="flex justify-between gap-2 mr-2 xl:gap-4 xl:mr-4 ">
                        <li className="flex items-center lg:w-[106px] xl:w-[136px] text-[15px] font-bold leading-tight capitalize rounded-lg lg:min-h-16 btn btn-ghost">
                            <Link href="instituto">
                                Instituto
                            </Link>
                        </li>
                        <li className="flex items-center lg:w-[106px] xl:w-[136px] text-[15px] font-bold leading-tight capitalize rounded-lg lg:min-h-16 btn btn-ghost">
                            <Link href="estudios">
                            <span className='text-primpim'>Estudios</span>
                            </Link>
                        </li>
                        <li className="flex items-center lg:w-[106px] xl:w-[136px] text-[15px] font-bold leading-tight capitalize rounded-lg lg:min-h-16 btn btn-ghost">
                            <Link href="turnos">
                            Turnos
                            </Link>
                        </li>
                        </ul>
                        <ul className="flex justify-between lg:mr-3 lg:gap-6">
                        <li className="flex items-center lg:w-[106px] xl:w-[136px] text-[14px] font-bold leading-none uppercase rounded-lg lg:min-h-14 btn bg-primpim border-none btn-block">
                            Sacar Turno
                        </li>
                        <li className="flex items-center lg:w-[106px] xl:w-[136px] text-[14px] font-bold leading-none uppercase rounded-lg lg:min-h-14 btn bg-mainpim border-none btn-block">
                            <a href="http://puertoimagenes.ddns.net:10001" target="_blank" rel="noreferrer">
                            Ver Informe
                            </a>
                        </li>
                        </ul>
                    </nav>
                    </header>

                    <main className="flex flex-col bg-[#fff] w-full min-w-screen">
                    {/* slider */}
                        <div className='flex flex-col h-auto'>
                            <div className="flex flex-col items-center justify-center w-full h-auto py-4 bg-mainpim">
                                <h1 className="text-2xl font-bold leading-tight text-center sm:text-2xl text-[#fff]">
                                    MIS ESTUDIOS
                                </h1>
                                <span className="text-2xl text-center text-[#fff]">
                                    Landing
                                </span>
                            </div>
                            <div className="relative w-full h-full">
                                <div className="absolute flex flex-col w-full h-full gap-2 py-8 text-right text-[#fff] drop-shadow-strong lg:drop-shadow-none lg:text-greenpim lg:w-1/2 lg:right-0 lg:text-left">
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
                                <img src="assets/images/slide-5.png" alt="mis estudios" className=""/>
                            </div>
                        </div>

                    {/* content */}
                    <div className="w-full text-2xl p-8 flex flex-col px-6 lg:px-8 mb-8 lg:ml-[7%] lg:max-w-[70%] text-justify leading-5">
                        <h1 className="mb-2 font-bold leading-tight ">
                            Mis estudios
                        </h1>
                        <p className="font-light">Accedé a tus estudios desde tu celular o computadora.</p>
                        <br />
                        <p className="font-light">Con tu número de DNI</p>
                        <br />
                    </div>
                    </main>

                    <section className="p-4 md:px-8 bg-[#ecece7] justify-center items-center w-full">
                    <div className="flex flex-col md:flex-row py-12 flex-1 w-full max-w-[1120px] m-auto">
                        {/* contact info */}
                        <div className='flex flex-col w-full lg:w-2/5'>
                        <picture className='inline-block bg-logoFooter w-[250px] h-[98px] sm:w-[270px] sm:h-[108px] bg-contain bg-no-repeat'/> <br />
                        <a href="tel:+5492235681552" className='inline-flex items-center gap-3 font-normal'>
                            <picture className="inline-block bg-phone w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                            223 56 81 552
                        </a>
                        <a href="https://wa.me/5492233489143?text=Hola" className='inline-flex items-center gap-3 font-normal'>
                            <picture className="inline-block bg-wa w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                            223 34 89 143
                        </a>
                        <span className='pt-2 font-semibold'>Bermejo 446, Mar del Plata (7600)</span>
                        </div>

                        {/* horarios */}
                        <div className='flex flex-col w-full pt-8 mt-8 lg:w-3/5 lg:mt-0'>
                        <span className='text-lg font-medium'><span className="pb-1 border-b border-mainpim">Ho</span>rario de Atención</span>
                        <span className='pt-2'>Lunes a Viernes (8 a 16 hs.) </span>
                        <span className='' >Sábado (8 a 12 hs.)</span>
                        <ul className='flex flex-row items-center gap-6 pt-2'>
                            <li>
                            <a className='' href="http://www.facebook.com/" target="_blank" rel="noreferrer">
                                <picture className="flex bg-f w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                            </a>
                            </li>
                            <li>
                            <a className='' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <picture className="flex bg-i w-[1.25rem] h-[1.25rem] leading-2 bg-contain bg-no-repeat mt-1" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </section>

                    <footer className="flex flex-1 md:px-8 border border-[#eaeaea] justify-center items-center">
                    <div
                        className="flex items-center justify-center flex-1 p-8"
                    >
                        2022 Imágenes Puerto - Todos los derechos reservados.
                    </div>
                    </footer>

                    <div className="fixed rounded-full p-1 bg-[rgb(75,166,54)] bottom-4 right-2 animate-wiggle lg:bottom-6 lg:right-6 z-10 hover:scale-110">
                        <a href="https://wa.me/5492233489143?text=Quisiera%20pedir%20un%20turno" className="text-[#eaeaea]" target="_blank" rel="noreferrer">
                        <svg 
                            stroke="currentColor" 
                            fill="currentColor" 
                            strokeWidth="0" 
                            viewBox="-4 -4 24 24"
                            height="2.25rem" 
                            width="2.25rem" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                        </svg>
                        </a>
                    </div>
                </div>
                {/* nav mobile */}
                <div className="w-screen drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="gap-2 p-4 overflow-y-auto menu w-[80%] bg-base-100">
                    <li className='mb-8'>
                    <picture className="inline-block bg-logoSmall w-[100px] h-[60px] bg-contain bg-no-repeat " />
                    </li>
                    <li className="flex items-center bg-transparent btn btn-block btn-ghost">
                        <Link href="instituto">
                            Instituto
                        </Link>
                    </li>
                    <li className="flex items-center bg-transparent btn btn-block btn-ghost text-primpim">
                        <Link href="estudios">
                            Estudios
                        </Link>
                    </li>
                    <li className="flex items-center bg-transparent btn btn-block btn-ghost">
                        <Link href="turnos">
                            Turnos
                        </Link>
                    </li>
                    <li className="flex items-center lg:w-[136px] text-[15px] font-bold leading-tight uppercase rounded-lg lg:min-h-16 btn bg-mainpim btn-block">
                    <span className="text-[#fff]">Sacar Turno</span>
                    </li>
                    <li className="flex items-center lg:w-[136px] text-[15px] font-bold leading-tight uppercase rounded-lg lg:min-h-16 btn bg-secpim btn-block text-mainpim hover:text-[#fff]">
                        <a href="http://puertoimagenes.ddns.net:10001" target="_blank" rel="noreferrer">
                            Ver Informe
                        </a>
                    </li>
                </ul>
                
                </div>
            </div>
        </div>
    )
}