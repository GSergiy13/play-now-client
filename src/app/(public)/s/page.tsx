'use client'

import { Suspense } from 'react'

import { SkeletonLoader } from '@/ui/skeleton/skeletonLoader'

import { SearchClient } from './SearchClient'

export default function SPage() {
	return (
		<Suspense
			fallback={
				<div className='grid grid-cols-6 gap-6'>
					<SkeletonLoader
						count={3}
						className='h-36 rounded-md'
					/>
				</div>
			}
		>
			<SearchClient />
		</Suspense>
	)
}
