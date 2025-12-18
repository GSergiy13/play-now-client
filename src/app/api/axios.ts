import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import Cookies from 'js-cookie'

import { API_URL } from '@/constants/constants'

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
