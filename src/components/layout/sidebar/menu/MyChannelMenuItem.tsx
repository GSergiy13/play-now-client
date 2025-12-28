'use client'

import { PAGE } from '@/config/public-page.config'

import { useProfile } from '@/hooks/useProfile'

import SidebarMenuItem from './SidebarMenuItem'
import type { MenuItemProps } from './munu.type'

export function MyChannelMenuItem({ item, ...props }: MenuItemProps) {
	const { profile } = useProfile()

	const myChannelLink = profile?.channel?.slug ? PAGE.channel(profile.channel.slug) : null

	if (!myChannelLink) return null

	return (
		<SidebarMenuItem
			item={{
				...item,
				link: myChannelLink
			}}
			{...props}
		/>
	)
}
