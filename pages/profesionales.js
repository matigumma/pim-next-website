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
                        NUESTROS PROFESIONALES
                    </h1>
                </div>
                <div className="relative w-full h-[600px] lg:min-h-0">
                    <img src="assets/images/slide-6.jpg" alt="mis estudios" className="object-cover object-left w-full h-full lg:object-center "/>
                </div>
            </div>

            {/* content */}
            <div className="w-full 2lg:text-2xl md:p-8 flex flex-col px-4 lg:px-0 mb-8 lg:max-w-[1120px] mx-auto text-left leading-6">
                <div className="text-xs breadcrumbs">
                    <ul>
                        <li><Link href="/">Home</Link></li> 
                        <li><Link href="/estudios">Estudios</Link></li> 
                        <li><Link href="/misestudios">Nuestros Profesionales</Link></li>
                    </ul>
                </div>
                <br />
                <h1 className="mb-2 text-2xl font-bold leading-tight ">
                    Dra. Eugenia María Juarez,
                </h1>
                <p className="font-light">Medica egresada de la Universidad Nacional de La Plata (UNLP) Espec. en Diagnóstico por Imágenes. M.P 113.686</p>

                <br />
                <h2 className="mb-2 text-2xl font-bold leading-tight ">
                    Dr. Ruben Marcelo Morato,
                </h2>
                <p className="font-light">Médico egresado de la Universidad Nacional de Buenos Aires (UBA) Espec. en Diagnóstico por Imágenes. MN: 102724 / MP: 447277</p>
                <br />
            </div>
        </main>

        <Footer />

        </div>
        <Drawerside />
        </div>
        </>
    )
}