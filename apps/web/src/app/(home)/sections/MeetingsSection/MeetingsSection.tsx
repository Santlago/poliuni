import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const MeetingsSection = () => {
  return (
    <section className='card flex flex-col items-center p-4 gap-4 justify-center my-10'>
      <h1 className='text-2xl font-semibold'>Encontros Presenciais</h1>
      <p className='indent-8 text-justify'>Também damos aulas presenciais, garantindo uma experiência prática e envolvente que promove interações dinâmicas e o aprendizado ativo.</p>
      <div className='carousel carousel-center w-[100%] space-x-2 pr-8 lg:pr-0 lg:w-2/3'>
        {Array(6).fill(0).map((_, i) => (
          <div key={i} id={`slide${i}`} className='card bg-base-100 h-[400px] lg:h-[700px] w-full carousel-item'>
            <figure className='relative'>
              <Image src='/aula-presencial.jpg' width={4032} height={3024} alt='aula-presencial' />
              <div className='absolute inset-0 bg-black opacity-25'></div>
            </figure>
            <a href={`#slide${i - 1}`}>
              <ArrowLeft size={120} className='absolute top-1/2 btn btn-circle mx-4 hidden lg:block' />
            </a>
            <a href={`#slide${i + 1}`}>
              <ArrowRight size={120} className='absolute top-1/2 right-0 btn btn-circle mx-4 hidden lg:block' />
            </a>
            <div className='card-body'>
              <h2 className='card-title'>Projeto Cegonha</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, inventore.</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Saiba Mais</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
