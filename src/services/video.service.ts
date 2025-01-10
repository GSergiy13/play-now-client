import axios from 'axios'

import type { IVideo } from '@/types/video.types'

class VideoService {
	getExploreVideos() {
		return axios
			.get<{ videos: IVideo[] }>('http://localhost:4200/api/videos/explore')
			.then(respond => respond.data.videos)
	}
}

export const videoService = new VideoService()
