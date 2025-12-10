import type { Metadata } from 'next'

import { PAGE } from '@/config/public-page.config'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Best trending videos on our platform.',

	alternates: {
		canonical: PAGE.TRENDING
	},

	openGraph: {
		url: PAGE.TRENDING,
		type: 'website',
		title: 'Trending',
		description: 'Best trending videos on our platform.'
	}
}

export default function TrendingPage() {
	return <div>Trending</div>
}
