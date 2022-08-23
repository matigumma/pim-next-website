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
                            INSTITUTO
                        </h1>
                    </div>
                    <img src="assets/images/slider-4.png" alt="Instituto" className="h-[200px] object-cover object-center w-full lg:h-auto"/>
                </div>
            </div>

        {/* content */}
        <div className="w-full flex flex-col px-6 lg:px-0 pt-4 mb-8 lg:max-w-[1120px] lg:mx-auto text-justify leading-6">
            <div className="text-xs breadcrumbs">
                <ul>
                    <li><Link href="/">Home</Link></li> 
                    <li><Link href="/instituto">Instituto</Link></li> 
                </ul>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="py-6">
                    <h1 className="mb-2 text-2xl font-bold leading-tight ">
                        ¿Quienes somos?
                    </h1>
                    <p className="">Somos un Centro de Diagnóstico por imágenes que cuenta con un grupo humano cuya prioridad es brindar el mejor servicio, con calidad profesional y científica, basada en la experiencia, la capacitación continua, la contención y la cordialidad no solo del personal médico, sino también técnico y administrativo, de tal manera que te sientas como “en casa”.</p>
                    <br />
                    <p className="">Nos instalamos en la zona del puerto con la firme vocación de atender la necesidad y la demanda originada por el crecimiento industrial, pesquero y naval que ha tenido el sector en los últimos años.</p>
                    <br />
                    <p className="">Queremos estar cerca, en “tu barrio” trabajando y comprometiéndonos a brindarte una buena atención</p>
                    <br />
                    <p className="">Por eso es que nos instalamos en el Puerto con el compromiso de poner la medicina a tu servicio, cubriendo tus necesidades y comprometiéndonos a seguir creciendo para brindar la mejor calidad de atención.</p>
                    <br />
                    <div className='flex flex-col w-full'>
                        <span className='text-lg font-bold'>Directores Médicos:</span>
                        <span className='pt-2'>Dra. Eugenia María Juárez</span>
                        <span className='' >Dr. Rubén Marcelo Morato</span>
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