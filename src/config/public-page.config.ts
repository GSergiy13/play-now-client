class PublicPage {
	HOME = '/'
	TRENDING = '/trending'
	VIDEO_GAME = '/video-games'

	SEARCH = '/search'

	MY_CHANNEL = '/my-channel'
	SUBSCRIPTION = '/subscriptions'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked-videos'

	SETTINGS = '/settings'
	FEEDBACK = '/feedback'

	video(path: string) {
		return `/v/${path}`
	}

	channel(path: string) {
		return `/c/${path}`
	}

	VIDEO = '/v'
}

export const PAGE = new PublicPage()
