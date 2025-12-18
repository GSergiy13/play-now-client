import Link, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TLink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

interface Props extends TLink {
	isLoading?: boolean
	children: ReactNode
}

export const LinkButton = ({ isLoading, children, ...rest }: Props) => {
	return (
		<Link
			className='px-4 py-2 bg-primary text-white rounded hover:bg-red-400 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 justify-center'
			{...rest}
		>
			{isLoading ? 'Loading...' : children}
		</Link>
	)
}
