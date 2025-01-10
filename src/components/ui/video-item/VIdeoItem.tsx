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

const VideoItem = ({ video, Icon }: Props) => {
	return (
		<div>
			<div className='relative mb-1.5'>
				<Link href={PAGE.video(video.publicId)}>
					<Image
						className='cursor-pointer rounded-md'
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
					/>
				</Link>

				<Link
					className=' absolute left-1.5 bottom-2'
					href={PAGE.channel(video.channel.slug)}
				>
					<Image
						src={video.channel.avatarUrl}
						width={35}
						height={35}
						alt={video.channel.slug}
					/>
				</Link>
			</div>

			<div className='mb-1.5 flex justify-between items-center'>
				<div className='flex items-center gap-0.5'>
					{Icon && (
						<Icon
							className='text-red-600'
							size={20}
						/>
					)}
					<span className='text-gray-500 text-sm'>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className='text-gray-400 text-xs'>{transformDate(video.createdAt)}</span>
				</div>
			</div>

			<div className='mb-1'>
				<Link
					href={PAGE.video(video.publicId)}
					className=' line-clamp-2 leading-[1.3]'
				>
					{video.title}
				</Link>
			</div>

			<div>
				<Link
					className=' flex items-center gap-1'
					href={PAGE.channel(video.channel.slug)}
				>
					<span className='text-gray-400 text-sm'>{video.channel.slug}</span>
					<span>
						<BadgeCheck
							className='text-green-500'
							size={18}
						/>
					</span>
				</Link>
			</div>
		</div>
	)
}

export default VideoItem
