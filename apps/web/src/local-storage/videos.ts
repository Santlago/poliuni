import { Video } from '@/types/video'

export const videos: Video[] = []

const englishVideos: Video[] = Array(11).fill(null).map((_, index) => ({
  id: `video-${index + 1}`,
  title: 'Aula de Inglês',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ad fuga dignissimos quisquam possimus numquam nulla ex eum officiis consequatur. Tempora consectetur ab pariatur hic quasi corrupti aliquid, voluptate ut repellat aperiam voluptatem illo cumque at. Ipsa iure vel earum asperiores suscipit voluptatum quibusdam neque nesciunt a recusandae natus nisi explicabo officia deserunt fugiat qui eligendi aspernatur dolores quasi, harum adipisci facere assumenda nemo. Laboriosam iusto nobis sint quod unde amet, consectetur laudantium voluptatem praesentium ut labore accusantium aliquid magnam facere impedit fuga ea quae cumque qui quibusdam voluptate debitis cum culpa? Exercitationem explicabo error impedit eaque veniam rerum nisi!',
  language: 'inglês',
  src: 'YHxcxdIpho0',
  teacher: 'Karen Santos'
} as Video))

const frenchVideos: Video[] = Array(11).fill(null).map((_, index) => ({
  id: `video-${index + 1}`,
  title: 'Aula de Francês',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ad fuga dignissimos quisquam possimus numquam nulla ex eum officiis consequatur. Tempora consectetur ab pariatur hic quasi corrupti aliquid, voluptate ut repellat aperiam voluptatem illo cumque at. Ipsa iure vel earum asperiores suscipit voluptatum quibusdam neque nesciunt a recusandae natus nisi explicabo officia deserunt fugiat qui eligendi aspernatur dolores quasi, harum adipisci facere assumenda nemo. Laboriosam iusto nobis sint quod unde amet, consectetur laudantium voluptatem praesentium ut labore accusantium aliquid magnam facere impedit fuga ea quae cumque qui quibusdam voluptate debitis cum culpa? Exercitationem explicabo error impedit eaque veniam rerum nisi!',
  language: 'francês',
  src: 'oS5b-JSM9FY',
  teacher: 'Ana Beatriz'
} as Video))

const spanishVideos: Video[] = Array(11).fill(null).map((_, index) => ({
  id: `video-${index + 1}`,
  title: 'Aula de Espanhol',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ad fuga dignissimos quisquam possimus numquam nulla ex eum officiis consequatur. Tempora consectetur ab pariatur hic quasi corrupti aliquid, voluptate ut repellat aperiam voluptatem illo cumque at. Ipsa iure vel earum asperiores suscipit voluptatum quibusdam neque nesciunt a recusandae natus nisi explicabo officia deserunt fugiat qui eligendi aspernatur dolores quasi, harum adipisci facere assumenda nemo. Laboriosam iusto nobis sint quod unde amet, consectetur laudantium voluptatem praesentium ut labore accusantium aliquid magnam facere impedit fuga ea quae cumque qui quibusdam voluptate debitis cum culpa? Exercitationem explicabo error impedit eaque veniam rerum nisi!',
  language: 'espanhol',
  src: 'QYHv8ArRsF0',
  teacher: 'Carla Nunes'
} as Video))

videos.push(...englishVideos)
videos.push(...frenchVideos)
videos.push(...spanishVideos)
