/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Head from 'next/head'
import Drawerside from '../components/drawerside'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Ecografia() {
    return(
        <>
        <Head>
            <title>Puerto Imágenes Médicas Mar del Plata · Centro de diagnostico por imágenes</title>
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
                        <h2 className="text-xl leading-tight text-center sm:text-3xl text-[#fff]">Ecografía</h2>
                    </div>
                    <img src="assets/images/ecografia.png" alt="Instituto" className="h-[200px] object-right object-cover lg:object-center w-full lg:h-auto"/>
                </div>
            </div>

        {/* content */}
        <div className="w-full flex flex-col px-6 pt-4 lg:px-0 mb-8 lg:max-w-[1120px] m-auto text-left leading-5">
            <div className="text-xs breadcrumbs">
                <ul>
                    <li><Link href="/">Home</Link></li> 
                    <li><Link href="/estudios">Estudios</Link></li> 
                    <li><Link href="/estudios">Ecografía</Link></li> 
                </ul>
            </div>
            <h1 className="my-2 text-2xl font-bold leading-tight text-left">
                Ecografía
            </h1>
            <p className="">Es un método diagnóstico que utiliza ondas de ultrasonido, siendo una prueba rápida, sencilla e indolora que permite ver las estructuras internas del cuerpo.</p>
            <br />
            <br />
            <h1 className="mb-2 text-2xl font-bold leading-tight ">
                Ecografía Doppler Color
            </h1>
            <p className="">Es un tipo especial de ecografía el sistema circulatorio (corazón, venas y arterias), evaluando permeabilidad, velocidad del flujo sanguíneo, calibre de los vasos, obstrucciones, etc.</p>
            <br />
            <br />
            <h1 className="mb-2 text-2xl font-bold leading-tight ">
                Ecografías Convencionales
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">Abdominal, Renal, Vesical, Prostática</li>
                <li className="pl-6">Ginecológica y Obstétrica (suprapubica)</li>
                <li className="pl-6">Endocavitarias (Transvaginal y Transrectal)</li>
                <li className="pl-6">Partes Blandas (Mamaria, Tiroidea, Muscular, Testicular, etc).Pediátricas</li>
                <li className="pl-6">Pediátricas</li>
                <li className="pl-6">En Recién Nacidos: ecografía de cadera (para descartar luxación congénita) y ecografía transfontanelar.</li>
            </ul>
            <br />
            <br />
            <h1 className="mb-2 text-2xl font-bold leading-tight ">
                El día del estudio:
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">Concurrir con estudios previos</li>
                <li className="pl-6">Concurrir 15 minutos antes</li>
                <li className="pl-6">Avisar si no asiste al turno para reprogramarlo</li>
                <li className="pl-6">En ningún caso es necesario suspender la medicación</li>
                <li className="pl-6">Ante cualquier duda comunicarse al (223) 5681552.</li>
            </ul>
            <br />
            <br />
            <h1 className="mb-2 text-2xl font-bold leading-tight ">
                Estudios sin preparación
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">Ecografía Musculo-esquelética</li>
                <li className="pl-6">Ecografía de Partes Blandas (Tiroides-Testículo, Mama, etc)</li>
                <li className="pl-6">Ecografía Transvaginal</li>
                <li className="pl-6">Ecodoppler arterial y venoso</li>
            </ul>
            <br />
            <br />
            <h1 className="mb-2 text-2xl font-bold leading-tight ">
                Estudios con preparación
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">Ecografía Abdominal: 8hs de ayuno</li>
                <li className="pl-6">Ecografía Abdomino-Pelviana: 8hs de ayuno y vejiga llena.*</li>
                <li className="pl-6">Ecografía Ginecológica: Vejiga llena*</li>
                <li className="pl-6">Ecografía Renal: 8 hs. de ayuno</li>
                <li className="pl-6">Ecografía Transrectal: Coloque un Enemol (venta libre en farmacia) 2hs antes del estudio.</li>
                <li className="pl-6">Ecografía Vesico-Prostática: Vejiga llena*</li>
                <li className="pl-6">Ecografía Vías Urinarias: Vejiga llena*</li>
                <li className="pl-6">Ecografía Doppler Abdominal: 8 hs. de ayuno</li>
                <li className="pl-6">Ecografía Ginecológica: Vejiga llena*</li>
            </ul>

            <span className="mt-4">
                * Vejiga llena: tomar un litro de agua, 1hs antes del estudio y retener la orina.
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