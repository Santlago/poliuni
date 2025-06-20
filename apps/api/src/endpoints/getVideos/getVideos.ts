import { RequestHandler } from 'express'
import { GetVideosResult } from 'api-types/endpoints/getVideos'
import { getPool } from '../../app'

type Handler = RequestHandler<any, GetVideosResult, any>

type Row = {
  id: string,
  title: string,
  description: string | null,
  youtube_video_id: string,
  language: string | null,
  order_in_course: number | null
}

export const handler: Handler = async (req, res) => {
  const pool = await getPool()

  const { rows } = await pool.query<Row>(
    `SELECT id,
            title,
            description,
            youtube_video_id,
            language,
            order_in_course
       FROM video
      WHERE is_active IS TRUE
   ORDER BY create_date DESC`
  )

  const result: GetVideosResult = {
    data: rows.map(row => ({
      id: row.id,
      title: row.title,
      description: row.description,
      youtubeVideoId: row.youtube_video_id,
      language: row.language,
      orderInCourse: row.order_in_course
    }))
  }

  res.status(200).json(result)
}
