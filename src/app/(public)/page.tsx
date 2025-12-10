import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading/Heading'
import VideoItem from '@/ui/video-item/VIdeoItem'

import { PAGE } from '@/config/public-page.config'

import Explore from './explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Discover trending videos on our platform.',

	alternates: {
		canonical: PAGE.HOME
	},

	openGraph: {
		url: PAGE.HOME,
		type: 'website',
		title: 'Home',
		description: 'Discover trending videos on our platform.'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const getTradingVideos = data.data.slice(0, 4)

	return (
		<section>
			<section className='mb-6'>
				<Heading Icon={Flame}>Trending Videos</Heading>

				<div className='grid grid-cols-4 gap-4'>
					{getTradingVideos.length &&
						getTradingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
				</div>
			</section>

			<Explore />
		</section>
	)
}
