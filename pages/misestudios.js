/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Head from 'next/head'
import Drawerside from '../components/drawerside'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Misestudios() {
    return(
        <>
        <Head>
            <title>Puerto Imágenes Médicas Mar del Plata · Estudios digitales</title>
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
                        MIS ESTUDIOS
                    </h1>
                    {/* <span className="text-2xl text-center text-[#fff]">
                        Landing
                    </span> */}
                </div>
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
            </div>

            {/* content */}
            <div className="w-full 2lg:text-2xl md:p-8 flex flex-col px-4 lg:px-0 mb-8 lg:max-w-[1120px] mx-auto text-left leading-6">
                <div className="text-xs breadcrumbs">
                    <ul>
                        <li><Link href="/">Home</Link></li> 
                        <li><Link href="/estudios">Estudios</Link></li> 
                        <li><Link href="/misestudios">Mis Estudios</Link></li>
                    </ul>
                </div>
                <h1 className="mb-2 text-2xl font-bold leading-tight ">
                    Mis estudios
                </h1>
                <p className="font-light">Accedé a tus estudios desde tu celular o computadora.</p>
                <br />
                <div className="w-full min-h-[600px]">
                    <iframe 
                        src="http://puertoimagenes.ddns.net:10001" 
                        className="w-full h-full" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    ></iframe>
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