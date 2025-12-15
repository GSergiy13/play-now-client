import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export const Button = ({ isLoading, children, ...rest }: Props) => {
	return (
		<button
			className='px-8 py-3 bg-primary text-white rounded hover:bg-red-400 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
			{...rest}
			disabled={isLoading || rest.disabled}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}
