import type { NextRequest } from 'next/server'

import { PAGE } from '@/config/public-page.config'

import { nextRedirect } from './next-redirect'

export async function redirectToLogin(request: NextRequest) {
	return nextRedirect(PAGE.AUTH, request.url)
}
