import Cookies from 'js-cookie'

import { axiosClassic } from '@/app/api/axios'
import type { IAuthData } from '@/app/auth/auth-form.types'
import type { IUser } from '@/types/auth.types'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

interface IAuthResponse {
	user: IUser
	accessToken: string
	refreshToken: string
}

class AuthService {
	private readonly _AUTH = '/auth'

	async main(type: 'login' | 'register', data: IAuthData, recaptchaToken?: string | null) {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken
			}
		})

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	// Client
	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
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

		return response
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

		if (response.data) this._removeTokenStorage()

		return response
	}

	private _saveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: process.env.BASE_URL,
			sameSite: 'strict',
			expires: 1
		})
	}

	private _removeTokenStorage() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN, {
			domain: process.env.BASE_URL,
			sameSite: 'strict'
		})
	}
}

export const authService = new AuthService()
