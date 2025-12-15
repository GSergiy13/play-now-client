import cn from 'clsx'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
	registration: UseFormRegisterReturn
}

export const Field = ({ label, error, registration, ...rest }: Props) => {
	return (
		<div className='mb-4'>
			<label>
				<span className='block text-gray-300 font-semibold mb-2'>{label}</span>
				<input
					className={cn(
						'w-full px-4 py-2 border border-border bg-transparent  shadow-sm rounded focus:outline-none focus:ring-0 text-white transition-colors focus:border-gray-300',
						error ? 'border-red-500' : 'border-border'
					)}
					{...registration}
					{...rest}
				/>
			</label>

			{error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
		</div>
	)
}
