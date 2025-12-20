import cn from 'clsx'
import { type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
	isH1?: boolean
	isPageHeading?: boolean
}

export const Heading = ({ children, Icon, isPageHeading = false, isH1 = false }: Props) => {
	return (
		<div className={cn('flex items-center mb-5', isPageHeading ? 'gap-3' : 'gap-2')}>
			{Icon && <Icon className='text-primary' />}

			{isH1 || isPageHeading ? (
				<h1 className={cn('font-semibold text-gray-200', isPageHeading ? 'text-2xl' : 'text-lg')}>
					{children}
				</h1>
			) : (
				<h2 className='text-lg font-semibold text-gray-200'>{children}</h2>
			)}
		</div>
	)
}
