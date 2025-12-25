import Image from 'next/image'

import { SkeletonLoader } from '../skeleton/skeletonLoader'

interface Props {
	isLoading: boolean
	value?: string
	overlay?: string
	aspectRatio?: '16:9' | '1:1' | '9:16'
}

export function ImagePreview({ isLoading, value, overlay, aspectRatio = '1:1' }: Props) {
	const isWideScreen = aspectRatio === '16:9'

	const width = isWideScreen ? 560 : 100
	const height = isWideScreen ? 260 : 100

	return (
		<div>
			{isLoading ? (
				<SkeletonLoader
					style={{
						width,
						height
					}}
				/>
			) : (
				!!value && (
					<div className='relative inline-block'>
						{!!overlay && (
							<Image
								src={overlay}
								alt='Overlay image'
								className='rounded-md absolute top-0 left-0 w-full h-full'
								width={width}
								height={height}
								priority
							/>
						)}
						<Image
							src={value}
							alt='Uploaded image'
							className='rounded-md'
							width={width}
							height={height}
							priority
						/>
					</div>
				)
			)}
		</div>
	)
}
