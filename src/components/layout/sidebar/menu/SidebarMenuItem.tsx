import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
}

const SidebarMenuItem = ({ item }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className={cn('group py-3 flex items-center gap-5 ')}
			>
				<item.icon className='group-hover:text-primary transition group-hover:rotate-6 min-w-6' />

				<span>{item.label}</span>
			</Link>
			{item.isBottomLine && <span className='h-[1px] bg-border my-5  w-full block'></span>}
		</li>
	)
}
export default SidebarMenuItem