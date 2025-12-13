import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading/Heading'
import VideoItem from '@/ui/video-item/VIdeoItem'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Videos Games',
	description: 'Best games video on our platform.',

	alternates: {
		canonical: PAGE.VIDEO_GAME
	},

	openGraph: {
		url: PAGE.VIDEO_GAME,
		type: 'website',
		title: 'Videos Games',
		description: 'Best games video on our platform.'
	}
}

export default async function VideoGamesPage() {
	const videoGames = await videoService.getVideoGames()

	return (
		<section>
			<Heading
				isH1
				Icon={Gamepad2}
			>
				Games Videos
			</Heading>

			<div className='grid_4_cols'>
				{!!videoGames.length ? (
					videoGames.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<p>No games videos available.</p>
				)}
			</div>
		</section>
	)
}
