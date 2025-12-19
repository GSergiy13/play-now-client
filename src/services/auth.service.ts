import Cookies from 'js-cookie'

import { clearAuthData, setAuthData } from '@/store/slice/auth.slice'

import { axiosClassic } from '@/app/api/axios'
import type { IAuthData } from '@/app/auth/auth-form.types'
import { store } from '@/store'
import { EnumTokens } from '@/types/auth.types'
import type { IUser } from '@/types/user.types'

interface IAuthResponse {
	user: IUser
	accessToken: string
	refreshToken: string
}

class AuthService {
	private readonly _AUTH = '/auth'

	async main(type: 'login' | 'register', data: IAuthData, recaptchaToken?: string | null) {
		console.log('AuthService.main called with type:', type, 'and data:', data)

		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken
			}
		})

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
			store.dispatch(setAuthData(response.data))
		}

		return response
	}

	async initializeAuth() {
		const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

		if (accessToken) return

		try {
			await this.getNewTokens()
		} catch {
			store.dispatch(clearAuthData())
		}
	}

	// Client
	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
			store.dispatch(setAuthData(response.data))
		}

		return response
	}

	// Server
	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._AUTH}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`
				}
			}
		)

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
		}

		return response.data
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

		if (response.data) {
			this.removeTokenStorage()
		}

		return response
	}

	private _saveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: process.env.BASE_URL,
			sameSite: 'strict',
			expires: 1 / 24,
			secure: true
		})
	}

	public removeTokenStorage() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN)
		store.dispatch(clearAuthData())
	}
}

export const authService = new AuthService()
