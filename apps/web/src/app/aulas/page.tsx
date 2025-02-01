import { YouTubeVideoThumbnail } from '@/components/youtube-video-thumbnail'
import { videos } from '@/local-storage/videos'

export default function Aulas() {

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
