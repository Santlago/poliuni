import { YouTubeVideo } from '@/components/youtube-video'
import clsx from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export const AboutSection = () => {

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

  const handleClick = () => {
    setIsDescriptionOpen(!isDescriptionOpen)
  }

  return (
    <section className='card flex max-w-7xl mx-auto items-center p-4 gap-4 justify-center my-10'>
      <h1 className='text-3xl lg:text-5xl font-bold'>Sobre o Projeto</h1>
      <div className={clsx(`flex flex-col lg:h-full overflow-hidden lg:block gap-4 text-xl text-justify lg:p-8 ${isDescriptionOpen ? 'h-auto' : 'h-[400px]'}`)}>
        <YouTubeVideo src='yqH9lZhtvEY' className='card w-full lg:w-1/3 float-left lg:mx-6 my-2' />
        <p>Imagine um projeto capaz de abrir portas para o mundo, proporcionando o ensino de idiomas às crianças de uma forma totalmente diferente: divertida, acessível e transformadora. Isso é o PoliUni. Criado com o sonho de tornar o aprendizado de línguas uma experiência envolvente e acessível, o PoliUni se dedica a ensinar idiomas de maneira voluntária, sem custos para as famílias. Nosso objetivo é simples, mas poderoso: oferecer às crianças a chance de sonhar grande, aprender com alegria e se conectar com o mundo.</p>
        <p>A visão do PoliUni vai além de ensinar idiomas. Queremos transformar a vida de crianças que muitas vezes não são vistas pela sociedade ou que não têm oportunidades iguais. Ao aprenderem um novo idioma, essas crianças expandem seus horizontes e têm a chance de se conectar com o mundo, o que é crucial para um futuro mais inclusivo e educado. Acreditamos que estamos plantando sementes para uma sociedade mais informada e preparada para lidar com a diversidade.</p>
        <p>Nosso objetivo é ambicioso: queremos levar o PoliUni para diversos países, impactando crianças e jovens de várias partes do mundo. Queremos fazer parte da formação de uma nova geração de jovens que são políglotas, culturalmente conscientes e prontos para construir um mundo melhor. E o mais incrível é que tudo isso acontece de forma gratuita, graças ao trabalho voluntário de pessoas que compartilham o sonho de fazer uma diferença real.</p>
      </div>
      <div className='flex flex-col items-center opacity-60 lg:hidden' onClick={handleClick}>
        <div className='flex flex-col items-center cursor-pointer'>
          <p className='text-sm'>Leia mais</p>
          {isDescriptionOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
    </section>
  )
}
