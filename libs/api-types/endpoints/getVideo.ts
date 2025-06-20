export type GetVideoQuery = {
  videoId: string
}

export type GetVideoResult = {
  id: string,
  title: string,
  description: string | null,
  youtubeVideoId: string,
  language: string | null,
  orderInCourse: number | null,
  createDate: string
}
