import type { IUser } from './user.types'
import type { IVideo } from './video.types'

export interface IWatchHistory {
	id: string
	watchAt: string
	user: IUser
	video: IVideo
}
