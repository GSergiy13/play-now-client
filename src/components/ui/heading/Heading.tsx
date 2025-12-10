import { type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
}

export const Heading = ({ children, Icon }: Props) => {
	return (
		<div className='flex items-center gap-2 mb-5'>
			{Icon && <Icon className='text-primary' />}
			<h2 className='text-lg font-semibold text-gray-200'>{children}</h2>
		</div>
	)
}
