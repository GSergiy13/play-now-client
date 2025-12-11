import axios from 'axios'

import type { IVideo } from '@/types/video.types'

class VideoService {
	getAllVideos(searchTerm?: string | null) {
		return axios
			.get<{ videos: IVideo[] }>(
				'http://localhost:4200/api/videos',
				searchTerm
					? {
							params: { searchTerm }
						}
					: {}
			)
			.then(respond => respond.data.videos)
	}

	getTrendingVideos() {
		return axios.get<IVideo[]>('http://localhost:4200/api/videos/trending')
	}

	getExploreVideos() {
		return axios
			.get<{ videos: IVideo[] }>('http://localhost:4200/api/videos/explore')
			.then(respond => respond.data.videos)
	}
}

export const videoService = new VideoService()
