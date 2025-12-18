import { instance } from '@/app/api/axios'
import type { IFullUser } from '@/types/user.types'

class UserService {
	private readonly _URL = '/users'

	getProfile() {
		return instance.get<IFullUser>(`${this._URL}/profile`)
	}
}

export const userService = new UserService()
