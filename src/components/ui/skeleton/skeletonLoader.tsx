import cn from 'clsx'
import type { CSSProperties } from 'react'

interface props {
	count: number
	className?: string
	style?: CSSProperties
}

export const SkeletonLoader = ({ count, className = '', style }: props) => {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={cn('bg-slate-800 rounded-sm h-10 mb-2.5 animate-pulse', className)}
					style={style}
				/>
			))}
		</>
	)
}
