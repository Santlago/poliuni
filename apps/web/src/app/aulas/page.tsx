'use client'

import { YouTubeVideoThumbnail } from '@/components/youtube-video-thumbnail'
import { useClient } from '@/hooks/useClient'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

export default function Aulas() {
  const client = useClient()
  const getVideos = useQuery({
    queryKey: ['getVideos'] as const,
    queryFn: ({ signal }) => client.getVideos({ signal })
  })
  const videos = getVideos.data?.data ?? []

  return (
    <div className='h-full flex flex-col items-center'>
      <section className='bg-base-100 w-full flex flex-col items-center'>
        <div className='p-4 w-full max-w-7xl py-8'>
          <h1 className='text-xl font-bold mb-6'>Estude gratuitamente com o Poliuni!</h1>
          <button className='btn btn-sm btn-primary'>
            Todas as aulas
          </button>
        </div>
      </section>
      <section className='p-4 w-full max-w-7xl'>
        <div className='text-3xl font-bold flex flex-col my-12'>
          <h2>Aulas de línguas online gratuitos:</h2>
          <h2>aprenda idiomas sem gastar um centavo!</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {getVideos.isLoading && (
            <>
              <div className='skeleton bg-base-200 w-full h-[332px]'/>
              <div className='skeleton bg-base-200 w-full h-[332px]'/>
              <div className='skeleton bg-base-200 w-full h-[332px]'/>
            </>
          )}
          {videos.map(video => (
            <div key={video.id} className='card bg-base-100 shadow-lg'>
              <figure>
                <Link href={`/aula/${video.id}`}>
                  <YouTubeVideoThumbnail
                    title={video.title}
                    src={video.youtubeVideoId}
                    playWidth='16'
                  />
                </Link>
              </figure>
              <div className="card-body">
                <h2 className='card-title'>{video.title}</h2>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <div className='w-full'>
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
                        playWidth='16'
                      />
                      <h3 className='text-lg lg:text-xl font-bold'>{video.title} {index}</h3>
                    </Link>
                  </div>
                )
              ))}
            </div>
          </section>
        ))}
      </div> */}
    </div>
  )
}
