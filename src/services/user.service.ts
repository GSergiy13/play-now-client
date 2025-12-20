import { instance } from '@/app/api/axios'
import type { ISettingData } from '@/app/studio/settings/setting.type'
import type { IFullUser } from '@/types/user.types'

class UserService {
	private readonly _URL = '/users'

	getProfile() {
		return instance.get<IFullUser>(`${this._URL}/profile`)
	}

	UpdateProfile(data: ISettingData) {
		return instance.put<boolean>(`${this._URL}/profile`, data)
	}
}

export const userService = new UserService()
