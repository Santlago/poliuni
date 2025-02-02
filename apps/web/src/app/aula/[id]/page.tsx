'use client'

import { YouTubeVideo } from '@/components/youtube-video'
import { YouTubeVideoThumbnail } from '@/components/youtube-video-thumbnail'
import { videos } from '@/local-storage/videos'
import { Video } from '@/types/video'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Aula() {
  const { id } = useParams()
  const video: Video = videos.filter(video => video.id === id)[0]

  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>(0)
  useEffect(() => {
    setHeight(ref.current?.getBoundingClientRect().height)
    console.log('HEIGHT >>>', height)
  }, [ref.current])

  return (
    <>
      <div className='flex justify-center gap-12 px-20 h-full'>
        <section className='flex flex-col gap-6 grow h-1/3'>
          <div ref={ref}>
            <YouTubeVideo
              src={video.src}
              title={video.title}
              className='card w-full'
            />
          </div>
          <div>
            <h1 className='text-3xl font-bold'>{video.title}</h1>
            <h2 className='text-xl font-semibold'>{video.description}</h2>
          </div>
          <div>
            <h1 className='text-3xl font-bold'>{video.title}</h1>
            <h2 className='text-xl font-semibold'>{video.description}</h2>
          </div>
          <div>
            <h1 className='text-3xl font-bold'>{video.title}</h1>
            <h2 className='text-xl font-semibold'>{video.description}</h2>
          </div>
        </section>
        <section className='card bg-base-200 w-[20%] shadow-xl h-full'>
          <div className='card-body h-full'>
            <h2 className="card-title">Curso de {video.language}</h2>
            <p>Continue sua jornada no aprendizado de {video.language}</p>
            <div className='overflow-y-scroll'>
              {videos.filter(vd => vd.language === video.language).map((video, index) => (
                <div key={index} className='carousel-item flex flex-col'>
                  <Link href={`/aula/${video.id}`}>
                    <YouTubeVideoThumbnail
                      key={index}
                      title={video.title}
                      src={video.src}
                      className='w-full aspect-video shadow-lg'
                    />
                    <h3 className='text-lg lg:text-xl font-bold'>{video.title} {index}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
