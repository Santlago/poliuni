import { DEFAULT_API_BASE_URL } from '@/app/constants'
import axios, { RawAxiosRequestHeaders, type AxiosInstance } from 'axios'
import { GetVideoQuery, GetVideoResult } from 'api-types/endpoints/getVideo'
import { GetVideosResult } from 'api-types/endpoints/getVideos'

export type ClientOptions = {
  baseURL?: string
}

type Milliseconds = number

export type RequestOptions = {
  timeout?: Milliseconds
  signal?: AbortSignal
  headers?: RawAxiosRequestHeaders
}

export class Client {
  private axios: AxiosInstance
  private baseURL: string

  constructor (options: ClientOptions = {}) {
    this.baseURL = options.baseURL ?? DEFAULT_API_BASE_URL
    this.axios = axios.create({
      baseURL: this.baseURL,
      withCredentials: true
    })
  }

  isBadRequest (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 400
  }

  isConflict (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 409
  }

  isForbidden (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 403
  }

  isNotFound (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 404
  }

  async getVideo (data: GetVideoQuery, options?: RequestOptions): Promise<GetVideoResult> {
    return (await this.axios.post('getVideo', data, options)).data
  }

  async getVideos (options: RequestOptions): Promise<GetVideosResult> {
    return (await this.axios.post('getVideos', undefined, options)).data
  }
}
