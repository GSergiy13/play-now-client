import { Video } from 'lucide-react'

import { Heading } from '@/ui/heading/Heading'
import VideoItem from '@/ui/video-item/VIdeoItem'

import { channelService } from '@/services/channel.service'
import type { TPageSlugProp } from '@/types/page.types'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata = {
	title: 'Channel',
	description: 'Channel page'
}

export default async function ChannelPage({ params: { slug } }: TPageSlugProp) {
	const data = await channelService.bySlug(slug)
	const channel = data.data

	return (
		<section>
			{!!channel.videos.length && (
				<section className='mb-6'>
					<Heading
						isH1
						Icon={Video}
					>
						Video
					</Heading>

					<div className='grid_5_cols'>
						{channel.videos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
							/>
						))}
					</div>
				</section>
			)}
		</section>
	)
}
