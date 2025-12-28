'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'

import { Heading } from '@/ui/heading/Heading'
import { SkeletonLoader } from '@/ui/skeleton/skeletonLoader'
import VideoItem from '@/ui/video-item/VIdeoItem'

import { videoService } from '@/services/video.service'

export default function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],

		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section className='min-h-[40vh]'>
			<Heading Icon={Compass}>Explore Videos</Heading>

			<div className='grid_5_cols'>
				{isLoading ? (
					<SkeletonLoader
						count={4}
						className='h-48 w-full'
					/>
				) : !!data?.length ? (
					data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<p>No videos available for exploration.</p>
				)}
			</div>
		</section>
	)
}
