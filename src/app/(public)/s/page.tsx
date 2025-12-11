import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import SearchClient from './SearchClient'

export const metadata: Metadata = {
	title: 'Search',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <SearchClient />
}
