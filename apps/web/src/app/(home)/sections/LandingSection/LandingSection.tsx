import Image from 'next/image'
import Link from 'next/link'

export const LandingSection = () => {
  return (
    <section className='relative py-32 lg:py-8 mb-10 lg:my-10 -m-4 text-[#d8d8d8]'>
      <video
        autoPlay
        loop
        muted
        className='absolute inset-0 w-full h-full object-cover hidden lg:block'
      >
        <source src='/landing-page.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <Image src='/landing-page.jpg' className='absolute inset-0 w-full h-full object-cover lg:hidden' width={3888} height={2592} alt='lading-page' />
      <div className='absolute bg-black inset-0 opacity-75 lg:opacity-50'></div>
      <div className='relative flex flex-col gap-4 lg:items-center justify-around px-4 lg:px-0 lg:py-40 z-10'>
        <h1 className='text-6xl font-bold'>Poliglotas no Universo!</h1>
        <p className='max-w-[700px] lg:text-center'>
          Transforme o aprendizado de idiomas em uma experiência divertida e acessível para crianças. Junte-se a nós e abra portas para um mundo de possibilidades.
        </p>
        <div className='flex gap-4'>
          <Link href='/aulas'>
            <button className='btn btn-primary lg:hidden'>Comece Agora</button>
          </Link>
          <Link href='/aulas'>
            <button className='btn btn-outline rounded-full hidden lg:block' data-theme='dark'>Comece Agora</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
