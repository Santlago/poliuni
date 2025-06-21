import { BookCheck, Globe, GraduationCap } from 'lucide-react'

export const StatsSection = () => {
  return (
    <section className='flex flex-col max-w-7xl mx-auto lg:flex-row gap-8 justify-between'>
        <div className='flex flex-col items-center lg:w-[30%] gap-4'>
          <div className='flex items-end gap-2'>
            <h1 className='text-4xl font-bold'>1 Aula</h1>
            <BookCheck size={40} />
          </div>
          <div className='p-10 w-full bg-base-200 grow shadow-md'>
            <p className='text-xl font-semibold'>Aulas online interativas e dinâmicas para facilitar o aprendizado.</p>
          </div>
        </div>
        <div className='flex flex-col items-center lg:w-[30%] gap-4'>
          <div className='flex items-end gap-2 text-warning'>
            <h1 className='text-4xl font-bold'>3 Professores</h1>
            <GraduationCap size={40} />
          </div>
          <div className='p-10 w-full bg-base-200 grow shadow-md'>
            <p className='text-xl font-semibold'>Professores altamente qualificados e experientes.</p>
          </div>
        </div>
        <div className='flex flex-col items-center lg:w-[30%] gap-4'>
          <div className='flex items-end gap-2 text-primary'>
            <h1 className='text-4xl font-bold'>1 Idioma</h1>
            <Globe size={40} />
          </div>
          <div className='p-10 w-full bg-base-200 grow shadow-md'>
            <p className='text-xl font-semibold'>Idiomas para expandir suas habilidades linguísticas.</p>
          </div>
        </div>
      </section>
  )
}
