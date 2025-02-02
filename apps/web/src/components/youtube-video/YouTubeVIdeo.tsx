'use client'

import { useState } from 'react'

type YouTubeVideoProps = {
  src: string
  className?: string
  title?: string
}

export function YouTubeVideo(props: YouTubeVideoProps) {
  const { src, className, title } = props
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${src}`}
      title={title ?? 'YouTube video'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      onLoad={handleLoad}
      className={`aspect-video ${className} ${loaded ? '' : 'skeleton bg-base-content opacity-20'}`}
    ></iframe>
  )
}
