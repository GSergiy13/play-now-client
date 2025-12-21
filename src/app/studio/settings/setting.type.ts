import type { IChannel } from '@/types/chanel.types'
import type { IFullUser } from '@/types/user.types'

export interface ISettingData extends Pick<IFullUser, 'name' | 'email'> {
	channel: Pick<IChannel, 'avatarUrl' | 'bannerUrl' | 'slug' | 'description'>
	password?: string
}
