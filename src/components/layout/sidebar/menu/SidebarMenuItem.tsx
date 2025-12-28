'use client'

import cn from 'clsx'
import Link from 'next/link'

import type { MenuItemProps } from './munu.type'

const SidebarMenuItem = ({ item, isActive }: MenuItemProps) => {
	return (
		<li>
			<Link
				href={item.link}
				className={cn('group py-3 flex items-center gap-5 ')}
			>
				<item.icon
					className={cn('group-hover:text-primary transition group-hover:rotate-6 min-w-6', {
						'text-red-400 ': isActive
					})}
				/>

				<span>{item.label}</span>
			</Link>
			{item.isBottomLine && <span className='h-[1px] bg-border my-5  w-full block'></span>}
		</li>
	)
}
export default SidebarMenuItem
