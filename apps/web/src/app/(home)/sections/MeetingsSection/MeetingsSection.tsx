import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const MeetingsSection = () => {
  return (
    <section className='card flex flex-col max-w-7xl mx-auto items-center py-4 gap-4 justify-center my-10'>
      <h1 className='text-3xl lg:text-5xl font-bold'>Encontros Presenciais</h1>
      <p className='indent-8 text-justify text-lg'>Também damos aulas presenciais, garantindo uma experiência prática e envolvente que promove interações dinâmicas e o aprendizado ativo.</p>
      <div className='carousel carousel-center w-[100%] space-x-2  lg:pr-0 lg:w-2/3 px-4'>
        {Array(1).fill(0).map((_, i) => (
          <div key={i} id={`slide${i}`} className='card bg-base-100 h-[400px] lg:h-[500px] w-full carousel-item'>
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
              <h2 className='card-title text-2xl'>Instituto Cegonha</h2>
              <p className='max-h-[100px] overflow-y-auto' style={{ scrollbarWidth: 'thin' }}>O Instituto Cegonha acredita no poder transformador da linguagem como ferramenta de inclusão, conexão e oportunidades. Com um projeto inovador de ensino de francês para todas as idades, a instituição promove não apenas o aprendizado de um novo idioma, mas também a troca cultural entre diferentes gerações.

Voltado à comunidade de Suzano e região, o curso de francês do Instituto Cegonha tem como objetivo tornar o ensino de línguas acessível, acolhedor e inspirador. A proposta valoriza tanto crianças quanto adultos e idosos, reforçando a missão de oferecer uma educação inclusiva, humanizada e intergeracional.

Aprender um novo idioma no Instituto Cegonha é mais do que estudar palavras — é vivenciar novas culturas, ampliar horizontes e construir pontes para um futuro com mais possibilidades.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
