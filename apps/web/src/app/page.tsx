import { YouTubeVideo } from '@/components/youtubevideo'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='flex flex-col lg:flex-row gap-4 justify-around py-8'>
        <div className='flex flex-col justify-around py-8'>
          <h1 className='text-6xl font-bold'>Poliglotas no Universo!</h1>
          <p className='max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='flex gap-4'>
            <button className='btn btn-primary'>Matricule-se</button>
            <button className='btn'>Saiba mais</button>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[400px] shadow-xl">
          <figure>
            <Image src='/landing-page.jpg' alt='children-learning' height={3024} width={4032} className='w-full' />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lorem ipsum!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Conheça</button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-base-200 card flex items-center p-4 gap-4 justify-center'>
        <h1 className='text-2xl font-semibold'>Quem Somos</h1>
        <YouTubeVideo src='https://www.youtube.com/embed/8b3Ea2o9JYA' className='card w-full lg:w-1/3 aspect-video'/>
      </section>
    </>
  )
}
