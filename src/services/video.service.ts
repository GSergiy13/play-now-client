import { axiosClassic } from '@/app/api/axios'
import type { IVideo } from '@/types/video.types'

class VideoService {
	private readonly _URL = '/videos'

	getAllVideos(searchTerm?: string | null) {
		return axiosClassic
			.get<{ videos: IVideo[] }>(
				this._URL,
				searchTerm
					? {
							params: { searchTerm }
						}
					: {}
			)
			.then(respond => respond.data.videos)
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._URL}/trending`)
	}
	getVideoGames() {
		return axiosClassic
			.get<{ videos: IVideo[] }>(`${this._URL}/games`)
			.then(respond => respond.data.videos)
	}

	getExploreVideos() {
		return axiosClassic
			.get<{ videos: IVideo[] }>(`${this._URL}/explore`)
			.then(respond => respond.data.videos)
	}
}

export const videoService = new VideoService()
