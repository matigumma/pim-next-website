import Head from 'next/head'
import Link from 'next/link'
import Carousel from '../components/carousel'
import Drawerside from '../components/drawerside'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
  return (
      <>
        <Head>
          <title>Puerto Imágenes Médicas Mar del Plata </title>
          <meta name="description" content="Centro de diagnostico por imágenes en zona puerto de Mar del Plata - Bermejo 446" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='drawer '>
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="flex flex-col w-screen drawer-content">

          <Header />

          <main className="flex flex-col bg-[#ecece7] w-screen  h-min lg:h-[600px]">
            {/* slider */}
            <div className='flex flex-col h-full max-h-[80vh]'>
              <Carousel />
            </div>
          </main>

          {/* contacto */}
          <section className="flex flex-col items-center justify-center w-full h-full gap-4 py-8 bg-lightpim">
            <h1 className="text-2xl font-bold leading-tight text-center sm:text-3xl">
              ¿Tiene consultas o sugerencias?
            </h1>
            <span className="text-center">¡Nuestro personal está para atenderlo!</span>
            <button className="bg-[#fff] border-none text-mainpim hover:text-[#fff] rounded btn btn-sm">
              <Link href="/contacto">
                  Contacto
              </Link>
            </button>
          </section>

          <section className='flex flex-col w-full'>
            <div className='relative flex flex-col h-[400px] w-full'>
              <div className='absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-4 lg:gap-2'>
                <div className='text-4xl text-[#ecece7] font-bold drop-shadow-strong'>
                  CONOCÉ A
                </div>
                <Link href="/profesionales">
                  <button className="p-3 text-base border-none btn bg-lightpim">
                      <span className="drop-shadow-strong">NUESTROS PROFESIONALES</span>
                  </button>
                </Link>
              </div>
              <img 
                src="/assets/images/slide-6.jpg" 
                alt="PROFESIONALES" 
                className="object-cover object-right w-full h-full lg:object-center brightness-75"/>
            </div>
          </section>

          <section className='flex w-full'>
            <div className='relative flex flex-col h-[400px] w-full'>
              <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-4 lg:gap-2 ">
                <div className="flex flex-col">
                    <div className="flex flex-1"/>
                    <h1 className="text-4xl font-bold leading-none 2lg:text-[3rem] text-center text-[#ecece7] drop-shadow-strong max-w-200">
                        NUESTRAS ÚLTIMAS 
                        NOVEDADES
                    </h1>
                </div>
                <Link href="/novedades">
                    <button className="p-3 text-base border-none btn bg-lightpim">
                        <span className="drop-shadow-strong">VER MÁS</span>
                    </button>
                </Link>
              </div>
              <img src="/assets/images/novedades.jpeg" alt="tus estudios mas cerca" className="object-cover object-left w-full h-full brightness-75"/>
            </div>
          </section>

          <Footer />

          </div>
          <Drawerside />
        </div>
      </>
  )
}
