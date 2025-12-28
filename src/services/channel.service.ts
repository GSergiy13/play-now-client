import { axiosClassic } from '@/app/api/axios'
import type { IChannel } from '@/types/chanel.types'

class ChannelService {
	private readonly _CHANNEL = '/channels'

	bySlug(slug?: string | null) {
		return axiosClassic.get<IChannel>(`${this._CHANNEL}/by-slug/${slug}`)
	}
}

export const channelService = new ChannelService()
