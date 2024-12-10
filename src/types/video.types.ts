import type { IChannel } from './chanel.types'

export interface IVideo {
	id: string
	title: string
	slug: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	createdAt: string
	channel: IChannel
}
