import type { ISidebarItem } from '../sidebar.types'

import SidebarMenuItem from './SidebarMenuItem'

interface SidebarItemProps {
	title?: string
	items: ISidebarItem[]
}

const SidebarMenu = ({ items, title }: SidebarItemProps) => {
	return (
		<nav>
			{title && <div className='opacity-45 uppercase text-xs font-medium mb-3'>{title}</div>}

			<ul>
				{items.map(menuItem => (
					<SidebarMenuItem
						key={menuItem.label}
						item={menuItem}
					/>
				))}
			</ul>
		</nav>
	)
}

export default SidebarMenu
