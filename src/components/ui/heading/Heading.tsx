import { type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
	isH1?: boolean
}

export const Heading = ({ children, Icon, isH1 = false }: Props) => {
	return (
		<div className='flex items-center gap-2 mb-5'>
			{Icon && <Icon className='text-primary' />}

			{isH1 ? (
				<h1 className='text-lg font-semibold text-gray-200'>{children}</h1>
			) : (
				<h2 className='text-lg font-semibold text-gray-200'>{children}</h2>
			)}
		</div>
	)
}
