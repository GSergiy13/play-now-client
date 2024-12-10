import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import { transformDate } from '@/utils/transform-date'
import { transformViews } from '@/utils/transform-views'

import type { IVideo } from '@/types/video.types'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

const VIdeoItem = ({ video, Icon }: Props) => {
	return (
		<div>
			<div>
				<Link href={PAGE.video(video.slug)}>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
					/>
				</Link>

				<Link href={PAGE.channel(video.channel.slug)}>
					<Image
						src={video.channel.avatarUrl}
						width={30}
						height={30}
						alt={video.channel.name}
					/>
				</Link>
			</div>

			<div>
				<div>
					{Icon && <Icon />}
					<span>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span>{transformDate(video.createdAt)}</span>
				</div>
			</div>

			<div>{video.title}</div>

			<div>
				<span>{video.channel.name}</span>
				<span>
					<BadgeCheck className='text-gray-500' />
				</span>
			</div>
		</div>
	)
}

export default VIdeoItem
