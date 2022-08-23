/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Head from 'next/head'
import Drawerside from '../components/drawerside'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Instituto() {
    return(
        <>
        <Head>
            <title>Puerto Imágenes Médicas Mar del Plata · Resonancia Nuclear</title>
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
                        <h2 className="text-xl leading-tight text-center sm:text-3xl text-[#fff]">Resonancia Nuclear Magnética</h2>
                    </div>
                    <img src="assets/images/resonancia.png" alt="Resonancia Nuclear Magnética" className="h-[200px] object-right object-cover lg:object-center w-full lg:h-auto"/>
                </div>
            </div>

        {/* content */}
        <div className="w-full flex flex-col px-6 pt-4 lg:px-0 mb-8 lg:max-w-[1120px] m-auto text-left leading-5">
            <div className="text-xs breadcrumbs">
                <ul>
                    <li><Link href="/">Home</Link></li> 
                    <li><Link href="/estudios">Estudios</Link></li> 
                    <li><Link href="/resonancia">Resonancia</Link></li> 
                </ul>
            </div>
            <h1 className="my-2 text-2xl font-bold leading-tight text-left">
                Resonancia Nuclear Magnética
            </h1>
            <p className="">Es una prueba diagnóstica que utiliza un campo magnético para formar la imagen, es un método sencillo, indoloro, de última generación que permite obtener imágenes de las estructuras internas del cuerpo Con gran definición.</p>
            <br />
            <p className="">Cuando solicite el turno es importante que indique si posee algún dispositivo metálico (marcapasos, clips, implantes, etc.)</p>
            <br />
            <br />
            <h1 className="mb-2 text-2xl font-bold leading-tight ">
                Avise
            </h1>
            <p className="">Si pesa más de 150kg, está embarazada o padece de claustrofobia.</p>
            <br />
            <br />
            <h1 className="mb-2 text-2xl font-bold leading-tight ">
                Contraindicaciones:
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">Marcapasos.</li>
                <li className="pl-6">Implantes auditivos.</li>
                <li className="pl-6">Neuroestimuladores.</li>
                <li className="pl-6">Expansores mamarios.</li>
                <li className="pl-6">Valvula de derivación ventrículo-peritoneal con regulación magnética.</li>
                <li className="pl-6">Bomba de infusión de medicamentos.</li>
                <li className="pl-6">Soporte vital externo en pacientes críticos.</li>
            </ul>
            <br />
            <br />
            <h1 className="mb-2 text-2xl leading-tight font-extralight ">
                El día del estudio:
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">Concurrir 15 minutos antes</li>
                <li className="pl-6">Concurrir con estudios previos (en caso de tenerlos)</li>
                <li className="pl-6">Avisar si no asiste al turno para reprogramarlo</li>
                <li className="pl-6">Concurrir sin maquillaje, ni objetos metálicos</li>
                <li className="pl-6">En ningún caso es necesario suspender la medicación</li>
                <li className="pl-6">Ante cualquier duda comunicarse al (223) 5681552.</li>
            </ul>
            <br />
            <br />
            <h1 className="mb-2 text-2xl leading-tight font-extralight ">
                Si el estudio fue solicitado con contraste endovenoso deberá:
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">Completar el interrogatorio</li>
                <li className="pl-6">Firmar consentimiento informado</li>
                <li className="pl-6">Indicar antecedentes de alergias o reacciones adversas al contraste endovenoso (gadolinio)</li>
            </ul>
            <br />
            <br />
            <h1 className="mb-2 text-2xl leading-tight font-extralight ">
                Estudios sin preparación (tanto con o sin contraste)
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">RNM de Pelvis</li>
                <li className="pl-6">RNM Osteoarticular (cadera, rodilla, tobillo, hombro, codo, muñeca, etc)</li>
                <li className="pl-6">RNM de Columna (cervical, dorsal, lumbar y sacrococcigea)</li>
                <li className="pl-6">RNM Muscular</li>
                <li className="pl-6">RNM de Cerebro</li>
                <li className="pl-6">RNM de Orbitas</li>
                <li className="pl-6">Angioresonancia de cerebro (en pacientes claustrofóbicos)</li>
            </ul>
            <br />
            <br />
            <h1 className="mb-2 text-2xl leading-tight font-extralight ">
                Estudios con preparación (tanto con o sin contraste)
            </h1>
            <ul className="pl-6 leading-tight list-disc">
                <li className="pl-6">RNM de Abdomen: 8hs de ayuno</li>
            </ul>
        </div>
        </main>

        <Footer />

        </div>
        <Drawerside />
        </div>
        </>
    )
}