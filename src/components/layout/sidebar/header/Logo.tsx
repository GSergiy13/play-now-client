import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'

export const Logo = () => {
	return (
		<Link
			href={PAGE.HOME}
			className='flex items-center gap-1 hover:opacity-80 transition-opacity'
		>
			<SquarePlay
				color={COLORS.primary}
				size={28}
			/>
			<span className='font-semibold text-xl'>MultiMedia</span>
		</Link>
	)
}
