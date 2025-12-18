class PublicPage {
	AUTH = '/auth'
	HOME = '/'
	TRENDING = '/trending'
	VIDEO_GAME = '/video-games'

	MY_CHANNEL = '/my-channel'
	SUBSCRIPTION = '/subscriptions'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked-videos'

	FEEDBACK = '/feedback'

	video(path: string) {
		return `/v/${path}`
	}

	channel(path: string) {
		return `/c/${path}`
	}

	VIDEO = '/v'

	SEARCH(searchTerm: string) {
		return `/s?q=${searchTerm}`
	}
}

export const PAGE = new PublicPage()
