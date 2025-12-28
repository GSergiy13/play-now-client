import type { IUser } from './user.types'
import type { IVideo } from './video.types'

export interface IChannel {
	id: string
	name: string
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	videos: IVideo[]
	user: IUser
	subscribers: IUser[]
	createdAt: string
}
