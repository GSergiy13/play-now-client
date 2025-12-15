import { Menu } from 'lucide-react'

import { Logo } from './Logo'

const SidebarHeader = ({ toggleSIdebar }: { toggleSIdebar: () => void }) => {
	return (
		<div className='flex items-center gap-6 mb-12 '>
			<button
				className='opacity-80 hover:opacity-100 transition-opacity'
				onClick={toggleSIdebar}
			>
				<Menu />
			</button>

			<Logo />
		</div>
	)
}

export default SidebarHeader
