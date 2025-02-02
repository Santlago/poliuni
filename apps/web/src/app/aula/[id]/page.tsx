'use client'

import { YouTubeVideo } from '@/components/youtube-video'
import { YouTubeVideoThumbnail } from '@/components/youtube-video-thumbnail'
import { videos } from '@/local-storage/videos'
import { Video } from '@/types/video'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Aula() {
  const { id } = useParams()
  const video: Video = videos.filter(video => video.id === id)[0]

  return (
    <>
      <div className='flex flex-col gap-6 overflow-y-scroll p-4'>
        <section className='flex flex-col gap-3 no-scrollbar'>
          <div className='-mx-4 -mt-4'>
            <YouTubeVideo
              src={video.src}
              title={video.title}
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl font-bold'>{video.title}</h1>
            <h2 className='text-sm font-semibold'>{video.description}</h2>
            <div className='flex items-center gap-3'>
              <div className="btn btn-ghost btn-circle btn-sm avatar overflow-hidden">
                <div className="w-full rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className='font-semibold'>{video.teacher}</p>
            </div>
          </div>
        </section>
        <section className='w-full card bg-base-200 shadow-xl h-[700px]'>
          <div className='card-body h-full'>
            <h2 className="card-title">Curso de {video.language}</h2>
            <p>Continue sua jornada no aprendizado de {video.language}</p>
            <div className='flex flex-col gap-4 overflow-y-scroll' style={{ scrollbarWidth: 'thin' }}>
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
