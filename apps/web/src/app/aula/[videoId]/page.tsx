'use client'

import { YouTubeVideo } from '@/components/youtube-video'
import { YouTubeVideoThumbnail } from '@/components/youtube-video-thumbnail'
import { useClient } from '@/hooks/useClient'
import { Video } from '@/types/video'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { BellOff, Bookmark, ChevronDown, ChevronUp, Forward, HeartHandshake, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function Aula() {
  const params = useParams<{ videoId: string }>()
  const client = useClient()

  const videoId = params.videoId!
  const getVideo = useQuery({
    queryKey: ['getVideo', { videoId }] as const,
    queryFn: ({ queryKey, signal }) => client.getVideo(queryKey[1], { signal })
  })
  const video = getVideo.data

  const getVideos = useQuery({
    queryKey: ['getVideos'] as const,
    queryFn: ({ signal }) => client.getVideos({ signal })
  })
  const videos = getVideos.data?.data ?? []

  return (
    <>
      <div className='flex flex-col justify-center lg:flex-row gap-6 overflow-y-scroll p-4 md:pb-0 lg:px-24 lg:h-full'>
        {getVideo.isLoading && (
          <div className='w-full h-full skeleton bg-base-200'/>
        )}
        {video && (
          <section className='flex flex-col gap-3 no-scrollbar lg:w-[70%] lg:overflow-y-auto'>
            <div className='-mx-4 -mt-4 lg:m-0'>
              <YouTubeVideo
                src={video.youtubeVideoId}
                title={video.title}
                className='w-full lg:card'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl lg:text-2xl font-bold'>{video.title}</h1>
              <div className='flex flex-col gap-2 lg:flex-row lg:justify-between'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className="btn btn-ghost btn-circle btn-sm avatar overflow-hidden">
                      <div className="w-full rounded-full">
                        <Image src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' width={200} height={200} alt='avatar' />
                      </div>
                    </div>
                    <p className='font-semibold'>Teacher</p>
                  </div>
                  <div className='btn btn-xs lg:hidden'>
                    <BellOff size={16} className='opacity-70' />
                    <ChevronDown size={16} className='opacity-70' />
                  </div>
                </div>
                <div className='flex justify-between lg:gap-4'>
                  <div className='btn btn-sm'><ThumbsUp size={16} />512</div>
                  <div className='btn btn-sm'><Forward size={16} />Share</div>
                  <div className='btn btn-sm'><Bookmark size={16} />Save</div>
                  <div className='btn btn-sm'><HeartHandshake size={16} />Thanks</div>
                </div>
              </div>
            </div>
            <div className={clsx(`card bg-base-200 p-4`)}>
              <h2 className='text-lg lg:text-xl font-bold'>Descrição</h2>
              <p className='overflow-hidden'>{video.description}</p>
            </div>
          </section>
        )}
        <section className='w-full card bg-base-200 shadow-xl h-[700px] lg:h-full lg:w-[25%]'>
          {true && (
            <div className='w-full h-full bg-base-200 skeleton'/>
          )}
          {video && videos && (
            <div className='card-body h-full'>
              <h2 className="card-title">Mais aulas</h2>
              <p>Continue sua jornada</p>
              <div className='flex flex-col overflow-y-scroll' style={{ scrollbarWidth: 'thin' }}>
                {videos.map((video, index) => (
                  <Link key={index} href={`/aula/${video.id}`}>
                    <div className='carousel-item py-2 flex flex-col hover:bg-base-300'>
                      <div className='flex flex-col lg:flex-row w-full gap-2'>
                        <div className='hidden lg:flex items-center'>{index + 1}</div>
                        <YouTubeVideoThumbnail
                          key={index}
                          title={video.title}
                          src={video.youtubeVideoId}
                          className='w-full lg:w-[35%] shadow-lg'
                        />
                        <div className='flex flex-col'>
                          <h3 className='text-lg lg:text-xl font-bold'>{video.title} {index + 1}</h3>
                          <p>Teacher</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
