import Image from 'next/image'
import Link from 'next/link'

import { SkeletonLoader } from '@/ui/skeleton/skeletonLoader'

import { STUDIO_PAGE } from '@/config/studio-page.config'

import { useProfile } from '@/hooks/useProfile'

export function HeaderAvatar() {
	const { isLoading, profile } = useProfile()

	if (isLoading) return <SkeletonLoader className='w-10 rounded-lg ' />

	return (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className='shrink-0'
		>
			<Image
				src={profile?.channel?.avatarUrl || '/default-avatar.png'}
				alt='Profile'
				width={40}
				height={40}
				className='rounded-lg '
			/>
		</Link>
	)
}
