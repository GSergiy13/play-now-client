'use server'

import { jwtVerify } from 'jose'

interface ITokenInside {
	id: string
	iat: number
	exp: number
}

export async function jwtVerifyServer(accessToken: string) {
	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(process.env.JWT_SECRET)
		)

		return payload
	} catch (error) {
		if (error instanceof Error && error.message.includes('exp claim timestamp check failed')) {
			console.log('Token expired')
			return null
		}

		console.log('Token verification failed:', error)
		return null
	}
}
