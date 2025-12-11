class StudioPage {
	HOME = '/studio'
	SETTINGS = `${this.HOME}/settings`

	UPLOAD_VIDEO = `${this.HOME}/upload`

	edit_video(path: string) {
		return `/edit/v/${path}`
	}

	edit_channel(path: string) {
		return `/edit/c/${path}`
	}
}

export const STUDIO_PAGE = new StudioPage()
