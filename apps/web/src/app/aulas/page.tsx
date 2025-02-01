import { YouTubeVideoThumbnail } from '@/components/youtube-video-thumbnail'
import { Video } from '@/types/video'

export default function Aulas() {
  const englishVideos: Video[] = Array(11).fill({
    title: 'Aula de Inglês',
    description: 'Aprenda inglês de forma fácil e divertida com nossos professores qualificados.',
    language: 'inglês',
    src: 'YHxcxdIpho0'
  } as Video)
  const frenchVideos: Video[] = Array(11).fill({
    title: 'Aula de Francês',
    description: 'Aprenda francês de forma fácil e divertida com nossos professores qualificados.',
    language: 'francês',
    src: 'oS5b-JSM9FY'
  } as Video)
  const spanishVideos: Video[] = Array(11).fill({
    title: 'Aula de Espanhol',
    description: 'Aprenda espanhol de forma fácil e divertida com nossos professores qualificados.',
    language: 'espanhol',
    src: 'QYHv8ArRsF0'
  } as Video)
  const videos: Video[] = []
  videos.push(...englishVideos)
  videos.push(...frenchVideos)
  videos.push(...spanishVideos)

  const languages = videos.reduce<string[]>((acc, video) => {
    if (!acc.includes(video.language)) {
      acc.push(video.language)
    }
    return acc
  }, [])

  return (
    <>
      <h1 className='text-6xl text-center font-bold'>Aulas</h1>
      <div className='w-full'>
        {languages.map((language, index) => (
          <section key={index} className='my-10 flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>Aulas de {language}</h2>
            <div className='carousel flex gap-4 overflow-x-scroll'>
              {videos.map((video, index) => (
                video.language === language && (
                  <div key={index} className='carousel-item flex flex-col'>
                    <YouTubeVideoThumbnail
                      key={index}
                      title={video.title}
                      src={video.src}
                      className='h-48 aspect-video'
                    />
                    <h3 className='text-lg font-bold'>{video.title} {index}</h3>
                  </div>
                )
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
