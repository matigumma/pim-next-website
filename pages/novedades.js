/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Head from 'next/head'
import Drawerside from '../components/drawerside'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Estudios() {
    return(
        <>
        <Head>
            <title>Puerto Imágenes Médicas Mar del Plata · Radiología - Resonancia Nuclear - Ecografía</title>
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
                        NOVEDADES
                    </h1>
                </div>
                <img src="assets/images/novedades.jpeg" alt="Novedades" className="h-[200px] object-cover object-center w-full lg:h-auto"/>
            </div>

        {/* content */}
        <div className="w-full text-2xl p-8 flex flex-col px-6 lg:px-0 mb-8 lg:max-w-[1120px] lg:mx-auto text-justify leading-5">
            <div className="text-xs breadcrumbs">
                <ul>
                    <li><Link href="/">Home</Link></li> 
                    <li><Link href="/novedades">Novedades</Link></li> 
                </ul>
            </div>
            <div className="flex flex-wrap w-full gap-6 pt-4 mx-auto">
                <div className="w-full lg:w-[48%] cursor-pointer rounded-none shadow-lg card bg-[#ecece7] hover:shadow-md">
                    <figure className="h-[200px]">
                        <img src="assets/images/slide-5.png" alt="Estudios digitales" className="object-cover object-left h-full "/>
                    </figure>
                    <div className="p-6 card-body">
                        <h2 className="card-title">
                            CUIDEMOS EL PLANETA
                        </h2>
                        <p className="text-base text-left">
                            ESTUDIOS DIGITALES<br />
                            Puerto imagenes piensa en el medio ambiente es por eso
                            que nuestros estudios son digitales.
                            Respetemos el planeta juntos.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-[48%] cursor-pointer rounded-none shadow-lg card bg-[#ecece7] hover:shadow-md">
                    <figure className="h-[200px]">
                    <img src="assets/images/flyer.jpeg" alt="flyer" className="object-cover object-center w-full h-full"/>
                    </figure>
                    <div className="p-6 card-body">
                        <h2 className="text-left card-title">
                            Obras sociales
                        </h2>
                        <p className="text-base text-left">
                            <ul className='columns-2'>
                                <li>
                                    Art Prevención
                                </li>
                                <li>
                                    A.M.A.T- COFACO
                                </li>
                                <li>
                                    Assist- card
                                </li>
                                <li>
                                    Avalian- Acá salud
                                </li>
                                <li>
                                    Grupo Roisa
                                </li>
                                <li>
                                    Mutual 23 de diciembre
                                </li>
                                <li>
                                    Meplife
                                </li>
                                <li>
                                    Oam
                                </li>
                                <li>
                                    Osdop
                                </li>
                                <li>
                                    Oseiv
                                </li>
                                <li>
                                    Ospat
                                </li>
                                <li>
                                    Thema
                                </li>
                                <li>
                                    Whope
                                </li>
                                <li>
                                    Coomarpes
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>

            <div className='justify-center w-full pt-10 text-base text-center'>
                pronto tendremos más novedades...
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