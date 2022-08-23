/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Head from 'next/head'
import Drawerside from '../components/drawerside'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Radiologia() {
    return(
        <>
        <Head>
            <title>Puerto Imágenes Médicas Mar del Plata · Radiología</title>
        </Head>
        <div className='drawer '>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="flex flex-col w-screen drawer-content">

        <Header />

        <main className="flex flex-col bg-[#fff] w-full min-w-screen">
            {/* slider */}
                <div className='flex flex-col h-auto'>
                    <div className="w-full h-full">
                        <div className="flex flex-col items-center justify-center w-full py-6 xl:py-10 bg-mainpim">
                            <h1 className="text-2xl font-bold leading-tight text-center sm:text-3xl text-[#fff]">
                                ESTUDIOS
                            </h1>
                            <h2 className="text-xl leading-tight text-center sm:text-3xl text-[#fff]">Radiología Digital</h2>
                        </div>
                        <img src="assets/images/radiologia.png" alt="Instituto" className="h-[200px] object-right object-cover lg:object-center w-full lg:h-auto"/>
                    </div>
                </div>

            {/* content */}
            <div className="w-full flex flex-col px-6 pt-4 lg:px-0 mb-8 lg:max-w-[1120px] m-auto text-left leading-5">
                <div className="text-xs breadcrumbs">
                    <ul>
                        <li><Link href="/">Home</Link></li> 
                        <li><Link href="/estudios">Estudios</Link></li> 
                        <li><Link href="/estudios">Radiologia Digital</Link></li> 
                    </ul>
                </div>
                <h1 className="my-2 text-2xl font-bold leading-tight text-left">
                    Radiología Digital
                </h1>
                
                <h1 className="mb-2 text-2xl leading-tight font-extralight ">
                    El día del estudio:
                </h1>
                <ul className="pl-6 leading-tight list-disc">
                    <li className="pl-6">Concurrir con estudios previos</li>
                    <li className="pl-6">15 minutos antes del turno</li>
                    <li className="pl-6">En caso de no poder asistir a su turno le rogamos que se comunique con nosotros para reprogramarlo.</li>
                    <li className="pl-6">En ningún caso es necesario suspender la medicación que toma habitualmente.</li>
                    <li className="pl-6">Ante cualquier duda comunicarse al (223) 5681552.</li>
                </ul>
                
                <span className="mt-4 font-bold">
                    Este estudio no requiere preparación previa.
                </span>
            </div>
        </main>

        <Footer />

        </div>
        <Drawerside />
        </div>
        </>
    )
}
