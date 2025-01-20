type YouTubeVideoProps = {
  src: string
  className?: string
  title?: string
}

export function YouTubeVideo(props: YouTubeVideoProps) {
  const { src, className, title } = props

  return (
    <iframe
      src={src}
      title={title ?? 'YouTube video'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className}
    ></iframe>
  )
}
