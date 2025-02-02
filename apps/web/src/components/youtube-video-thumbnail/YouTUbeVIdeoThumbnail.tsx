'use client'

import clsx from 'clsx'
import Image from 'next/image'

type YouTubeVideoThumbnailProps = {
  src: string
  className?: string
  title?: string
  description?: string
  playWidth?: string
}

export function YouTubeVideoThumbnail(props: YouTubeVideoThumbnailProps) {
  const { src, className, title, playWidth } = props

  const handleClick = () => {
    // window.location.href = `https://www.youtube.com/watch?v=${src}`
  }

  return (
    <div className={`card cursor-pointer ${className}`} onClick={handleClick}>
      <Image
        src={`https://img.youtube.com/vi/${src}/hqdefault.jpg`}
        alt={title ?? 'YouTube video'}
        width={480}
        height={360}
        className="card w-full h-full aspect-video object-cover"
      />
      <div className='card absolute bg-black inset-0 opacity-20'></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(`text-white ${playWidth ? `h-${playWidth} w-${playWidth}` : 'lg:h-8 lg:w-8 h-16 w-16'}`)}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 8.64v6.72L15.27 12 10 8.64M9 5v14l11-7L9 5z" />
        </svg>
      </div>
    </div>
  )
}
