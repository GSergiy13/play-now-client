import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'

const SidebarHeader = ({ toggleSIdebar }: { toggleSIdebar: () => void }) => {
	return (
		<div className='flex items-center gap-6 mb-12 '>
			<button
				className='opacity-80 hover:opacity-100 transition-opacity'
				onClick={toggleSIdebar}
			>
				<Menu />
			</button>

			<Link
				href={PAGE.HOME}
				className='flex items-center gap-1'
			>
				<SquarePlay
					color={COLORS.primary}
					size={28}
				/>
				<span className='font-semibold text-xl'>PLAY_now</span>
			</Link>
		</div>
	)
}

export default SidebarHeader
