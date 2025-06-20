import { RequestHandler } from 'express'
import { GetVideoQuery, GetVideoResult } from 'api-types/endpoints/getVideo'
import { getPool } from '../../app'
import { NotFound } from 'http-errors'
import * as yup from 'yup'

type Handler = RequestHandler<any, GetVideoResult, GetVideoQuery>

const schema = yup.object({
  videoId: yup.string().required()
})

type Row = {
  id: string,
  title: string,
  description: string | null,
  youtube_video_id: string,
  language: string | null,
  order_in_course: number | null,
  create_date: Date
}

export const handler: Handler = async (req, res) => {
  const pool = await getPool()
  const { videoId } = schema.validateSync(req.body)

  const { rows: [video] } = await pool.query<Row>(
    `SELECT id,
            title,
            description,
            youtube_video_id,
            language,
            order_in_course,
            create_date
       FROM video
      WHERE id = $1`,
    [videoId]
  )

  if (!video) {
    throw new NotFound(`Assistant with id ${videoId} not found`)
  }

  const result: GetVideoResult = {
    id: video.id,
    title: video.title,
    description: video.description,
    youtubeVideoId: video.youtube_video_id,
    language: video.language,
    orderInCourse: video.order_in_course,
    createDate: video.create_date.toISOString()
  }

  res.status(200).json(result)
}
