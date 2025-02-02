import { Video } from '@/types/video'

export const videos: Video[] = []

const englishVideos: Video[] = Array(11).fill(null).map((_, index) => ({
  id: `video-${index}`,
  title: 'Aula de Inglês',
  description: 'Aprenda inglês de forma fácil e divertida com nossos professores qualificados.',
  language: 'inglês',
  src: 'YHxcxdIpho0'
} as Video))

const frenchVideos: Video[] = Array(11).fill(null).map((_, index) => ({
  id: `video-${index}`,
  title: 'Aula de Francês',
  description: 'Aprenda francês de forma fácil e divertida com nossos professores qualificados.',
  language: 'francês',
  src: 'oS5b-JSM9FY'
} as Video))

const spanishVideos: Video[] = Array(11).fill(null).map((_, index) => ({
  id: `video-${index}`,
  title: 'Aula de Espanhol',
  description: 'Aprenda espanhol de forma fácil e divertida com nossos professores qualificados.',
  language: 'espanhol',
  src: 'QYHv8ArRsF0'
} as Video))

videos.push(...englishVideos)
videos.push(...frenchVideos)
videos.push(...spanishVideos)
