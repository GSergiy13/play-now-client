'use client'

import { useQuery } from '@tanstack/react-query'
import { Flame, Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/ui/heading/Heading'
import { SkeletonLoader } from '@/ui/skeleton/skeletonLoader'
import VideoItem from '@/ui/video-item/VIdeoItem'

import { videoService } from '@/services/video.service'

export function SearchClient() {
	const searchParams = useSearchParams()

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchParams.get('q')],

		queryFn: () => videoService.getAllVideos(searchParams.get('q'))
	})

	return (
		<section className='min-h-[40vh]'>
			<Heading
				isH1
				Icon={Search}
			>
				{' '}
				Search by: {searchParams.get('q')}
			</Heading>

			<div className='grid grid-cols-4 gap-4'>
				{isLoading ? (
					<SkeletonLoader
						count={4}
						className='h-48 w-full'
					/>
				) : data?.length ? (
					data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<p className='text-gray-400'>No videos found for "{searchParams.get('q')}"</p>
				)}
			</div>
		</section>
	)
}
