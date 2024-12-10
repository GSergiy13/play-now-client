import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { ISidebarItem } from '../sidebar.types'

import SidebarMenuItem from './SidebarMenuItem'

interface SidebarItemProps {
	title?: string
	items: ISidebarItem[]
}

const SidebarMenu = ({ items, title }: SidebarItemProps) => {
	const getPathName = usePathname()

	return (
		<nav>
			{title && <div className='opacity-45 uppercase text-xs font-medium mb-3'>{title}</div>}

			<ul>
				{items.map(menuItem => (
					<SidebarMenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link)(getPathName)}
					/>
				))}
			</ul>
		</nav>
	)
}

export default SidebarMenu
