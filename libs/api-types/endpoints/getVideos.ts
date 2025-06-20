export type GetVideosResultData = {
  id: string
  title: string
  description: string | null
  youtubeVideoId: string
  language: string | null
  orderInCourse: number | null
}

export type GetVideosResult = {
  data: GetVideosResultData[]
}
