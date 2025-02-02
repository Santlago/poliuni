import { YouTubeVideoThumbnail } from '@/components/youtube-video-thumbnail'
import { videos } from '@/local-storage/videos'
import Link from 'next/link'

export default function Aulas() {

  const languages = videos.reduce<string[]>((acc, video) => {
    if (!acc.includes(video.language)) {
      acc.push(video.language)
    }
    return acc
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-6xl text-center font-bold '>Aulas</h1>
      <div className='w-full'>
        {languages.map((language, index) => (
          <section key={index} className='my-10 flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>Aulas de {language}</h2>
            <div className='carousel flex gap-4 lg:gap-6 overflow-x-scroll'>
              {videos.map((video, index) => (
                video.language === language && (
                  <div key={index} className='carousel-item flex flex-col'>
                    <Link href={`/aula/${video.id}`}>
                      <YouTubeVideoThumbnail
                        key={index}
                        title={video.title}
                        src={video.src}
                        className='h-48 lg:h-56 aspect-video shadow-lg'
                      />
                      <h3 className='text-lg lg:text-xl font-bold'>{video.title} {index}</h3>
                    </Link>
                  </div>
                )
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
