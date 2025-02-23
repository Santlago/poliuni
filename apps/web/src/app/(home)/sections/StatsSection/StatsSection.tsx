import { BookCheck, Globe, GraduationCap } from 'lucide-react'

export const StatsSection = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-8 justify-between'>
        <div className='flex flex-col items-center lg:w-[30%] gap-4'>
          <div className='flex items-center gap-3 text-secondary'>
            <div className='flex flex-col text-right'>
              <h1 className='text-6xl font-bold'>24</h1>
              <h2 className='text-3xl font-bold'>Aulas</h2>
            </div>
            <BookCheck size={50} />
          </div>
          <div className='p-16 w-full bg-base-200 flex-grow'>
            <p className='text-lg font-semibold'>Aulas online interativas e dinâmicas para facilitar o aprendizado.</p>
          </div>
        </div>
        <div className='flex flex-col items-center lg:w-[30%] gap-4'>
          <div className='flex items-center gap-3 text-warning'>
            <div className='flex flex-col text-right'>
              <h1 className='text-6xl font-bold'>10</h1>
              <h2 className='text-3xl font-bold'>Professores</h2>
            </div>
            <GraduationCap size={70} />
          </div>
          <div className='p-16 w-full bg-base-200 flex-grow'>
            <p className='text-lg font-semibold'>Professores altamente qualificados e experientes.</p>
          </div>
        </div>
        <div className='flex flex-col items-center lg:w-[30%] gap-4'>
          <div className='flex items-center gap-3 text-primary'>
            <div className='flex flex-col text-right'>
              <h1 className='text-6xl font-bold'>6</h1>
              <h2 className='text-3xl font-bold'>Idiomas</h2>
            </div>
            <Globe size={60} />
          </div>
          <div className='p-16 w-full bg-base-200 flex-grow'>
            <p className='text-lg font-semibold'>Idiomas variados para expandir suas habilidades linguísticas.</p>
          </div>
        </div>
      </section>
  )
}
