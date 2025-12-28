import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading/Heading'
import VideoItem from '@/ui/video-item/VIdeoItem'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

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

export default async function TrendingPage() {
	const trendingVideos = await videoService.getTrendingVideos()

	return (
		<section>
			<Heading
				isH1
				Icon={Flame}
			>
				Trending Videos
			</Heading>

			<div className='grid_5_cols'>
				{!!trendingVideos.data.length ? (
					trendingVideos.data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<p>No trending videos available.</p>
				)}
			</div>
		</section>
	)
}
