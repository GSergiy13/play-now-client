import type { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
	icon: LucideIcon
	label: string
	link: string
	isBottomLine?: boolean
}

export interface ISidebarSubscription {
	avatar: string
	label: string
	link: string
	isLiveNow?: boolean
	isRecentUpload?: boolean
}
