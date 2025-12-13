import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'

import { API_URL } from '@/constants/constants'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
}

export const axiosClassic = axios.create(options)
