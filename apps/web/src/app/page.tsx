import { YouTubeVideo } from '@/components/youtubevideo'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='relative py-8 my-10 -mx-4 lg:text-[#d8d8d8]'>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        >
          <source src="/landing-page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 hidden lg:block"></div>
        <div className='relative flex flex-col gap-4 lg:items-center justify-around px-4 lg:px-0 lg:py-40 z-10'>
          <h1 className='text-6xl font-bold'>Poliglotas no Universo!</h1>
          <p className='max-w-[700px] lg:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='flex gap-4'>
            <button className='btn btn-primary lg:hidden'>Comece Agora</button>
            <button className='btn btn-outline rounded-full hidden lg:block' data-theme='dark'>Comece Agora</button>
          </div>
        </div>
      </section>
      <section className='card flex bg-base-200 items-center p-4 gap-4 justify-center my-10'>
        <h1 className='text-2xl font-semibold'>Sobre o Projeto</h1>
        <div className='flex flex-col lg:block gap-4 text-lg text-justify lg:p-8'>
          <YouTubeVideo src='https://www.youtube.com/embed/8b3Ea2o9JYA' className='card w-full lg:w-1/3 aspect-video float-left lg:mx-6 my-2' />
          <p className='indent-8'>Imagine um projeto capaz de abrir portas para o mundo, proporcionando o ensino de idiomas às crianças de uma forma totalmente diferente: divertida, acessível e transformadora. Isso é o PoliUni. Criado com o sonho de tornar o aprendizado de línguas uma experiência envolvente e acessível, o PoliUni se dedica a ensinar idiomas de maneira voluntária, sem custos para as famílias. Nosso objetivo é simples, mas poderoso: oferecer às crianças a chance de sonhar grande, aprender com alegria e se conectar com o mundo.</p>
          <p className='indent-8'>A visão do PoliUni vai além de ensinar idiomas. Queremos transformar a vida de crianças que muitas vezes não são vistas pela sociedade ou que não têm oportunidades iguais. Ao aprenderem um novo idioma, essas crianças expandem seus horizontes e têm a chance de se conectar com o mundo, o que é crucial para um futuro mais inclusivo e educado. Acreditamos que estamos plantando sementes para uma sociedade mais informada e preparada para lidar com a diversidade.</p>
          <p className='indent-8'>Nosso objetivo é ambicioso: queremos levar o PoliUni para diversos países, impactando crianças e jovens de várias partes do mundo. Queremos fazer parte da formação de uma nova geração de jovens que são políglotas, culturalmente conscientes e prontos para construir um mundo melhor. E o mais incrível é que tudo isso acontece de forma gratuita, graças ao trabalho voluntário de pessoas que compartilham o sonho de fazer uma diferença real.</p>
        </div>
      </section>
      <section className='card flex flex-col items-center p-4 gap-4 justify-center my-10'>
        <h1 className='text-2xl font-semibold'>Encontros Presenciais</h1>
        <p className='indent-8 text-justify'>Também damos aulas presenciais, garantindo uma experiência prática e envolvente que promove interações dinâmicas e o aprendizado ativo.</p>
        <div className="carousel carousel-center w-[100%] space-x-2 pr-8 lg:pr-0 lg:w-2/3">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} id={`slide${i}`} className="card bg-base-100 h-[400px] lg:h-[700px] w-full carousel-item">
              <figure className='relative'>
                <Image src='/aula-presencial.jpg' width={4032} height={3024} alt='aula-presencial' />
                <div className='absolute inset-0 bg-black opacity-25'></div>
              </figure>
              <a href={`#slide${i-1}`}>
                <ArrowLeft size={120} className='absolute top-1/2 btn btn-circle mx-4 hidden lg:block' />
              </a>
              <a href={`#slide${i+1}`}>
              <ArrowRight size={120} className='absolute top-1/2 right-0 btn btn-circle mx-4 hidden lg:block' />
              </a>
              <div className="card-body">
                <h2 className="card-title">Projeto Cegonha</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, inventore.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Saiba Mais</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
