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
                        ESTUDIOS
                    </h1>
                </div>
            </div>

        {/* content */}
        <div className="w-full text-2xl p-8 flex flex-col px-6 lg:px-0 mb-8 lg:max-w-[1120px] lg:mx-auto text-justify leading-5">
            <div className="text-xs breadcrumbs">
                <ul>
                    <li><Link href="/">Home</Link></li> 
                    <li><Link href="/estudios">Estudios</Link></li> 
                </ul>
            </div>
            <div className="flex flex-wrap w-full gap-6 pt-4 mx-auto">
                <Link href="/radiologia" >
                <div className="w-full lg:w-[48%] cursor-pointer rounded-none shadow-lg card bg-[#ecece7] hover:shadow-md">
                    <figure className="h-[200px]">
                        <img src="assets/images/radiologia.png" alt="mis estudios" className="object-cover object-right h-full lg:object-center"/>
                    </figure>
                    <div className="p-6 card-body">
                        <h2 className="card-title">
                            Radiología Digital
                        </h2>
                        <p className="text-base text-left">Es una prueba que utiliza Rayos X obteniendo imágenes que permitan estudiar las estructuras internar del cuerpo, en especial los huesos.</p>
                    </div>
                </div>
                </Link>
                <Link href="/resonancia" >
                <div className="w-full lg:w-[48%] cursor-pointer rounded-none shadow-lg card bg-[#ecece7] hover:shadow-md">
                    <figure className="h-[200px]">
                    <img src="assets/images/resonancia.png" alt="mis estudios" className="object-cover object-center w-full h-full"/>
                    </figure>
                    <div className="p-6 card-body">
                        <h2 className="text-left card-title">
                            Resonancia Nuclear Magnética
                        </h2>
                        <p className="text-base text-left">Es un método indoloro y de última generación que permite obtener imágenes de las estructuras internas del cuerpo en gran definición, utiliza un fuerte campo magnético para formar la imagen.</p>
                    </div>
                </div>
                </Link>
                <Link href="/ecografia" >
                <div className="w-full lg:w-[48%] cursor-pointer rounded-none shadow-lg card bg-[#ecece7] hover:shadow-md">
                    <figure className="h-[200px]">
                    <img src="assets/images/ecografia.png" alt="mis estudios" className="object-cover object-center w-full h-full"/>
                    </figure>
                    <div className="p-6 card-body">
                        <h2 className="card-title">
                            Ecografía
                        </h2>
                        <p className="text-base text-left">Es un método diagnóstico que utiliza ondas de ultrasonido, siendo una prueba rápida, sencilla e indolora que permite ver las estructuras internas del cuerpo.</p>
                    </div>
                </div>
                </Link>
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