'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { PAGE } from '@/config/public-page.config'

import type { ISidebarItem } from '../sidebar.types'

import { MyChannelMenuItem } from './MyChannelMenuItem'
import SidebarMenuItem from './SidebarMenuItem'
import { useTypedSelector } from '@/store'

interface SidebarItemProps {
	title?: string
	items: ISidebarItem[]
}

const SidebarMenu = ({ items, title }: SidebarItemProps) => {
	const getPathName = usePathname()
	const isLogin = useTypedSelector(state => state.auth.isLoggedIn)

	return (
		<nav>
			{title && <div className='opacity-45 uppercase text-xs font-medium mb-3'>{title}</div>}

			<ul>
				{items.map(menuItem => {
					const props = {
						item: menuItem,
						isActive: !!match(menuItem.link)(getPathName)
					}
					const isMyChannel = menuItem.link === PAGE.MY_CHANNEL
					const isMyChannelItem = isMyChannel && isLogin

					return isMyChannelItem ? (
						<MyChannelMenuItem
							key={menuItem.label}
							{...props}
						/>
					) : isMyChannel ? null : (
						<SidebarMenuItem
							key={menuItem.label}
							{...props}
						/>
					)
				})}
			</ul>
		</nav>
	)
}

export default SidebarMenu
