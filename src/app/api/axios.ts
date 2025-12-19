import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import Cookies from 'js-cookie'

import { API_URL } from '@/constants/constants'

import { errorCatch } from './api.helper'
import { authService } from '@/services/auth.service'
import { EnumTokens } from '@/types/auth.types'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
}

export const axiosClassic = axios.create(options)

export const instance = axios.create(options)

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error.response?.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' && originalRequest && !originalRequest._isRetry)
		) {
			originalRequest._isRetry = true

			try {
				await authService.getNewTokens()

				return instance.request(originalRequest)
			} catch (err) {
				if (errorCatch(err) === 'jwt expired' || errorCatch(err) === 'jwt must be provided') {
					authService.removeTokenStorage()
					throw err
				}
			}

			throw error
		}
	}
)
