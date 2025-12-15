'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Logo } from '@/components/layout/sidebar/header/Logo'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

interface IAuthForm {
	email: string
	password: string
	confirmPassword?: string
}

export function AuthClient() {
	const [isLoading, setIsLoading] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const password = watch('password', '')

	const onSubmitHandler = (data: IAuthForm) => {
		if (isLoading) {
			console.log(data)
		} else {
			console.log(data)
		}
	}

	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center'>
			<Logo />
			<div className='w-1/4 mx-auto mt-8 p-layout border border-border rounded-lg shadow-lg '>
				<div className='flex justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 font-semibold transition-colors border-b ${
							isLoading
								? ' text-primary rounded-b-2 border-b-primary'
								: ' text-gray-600 border-b-border'
						}`}
						onClick={() => setIsLoading(true)}
					>
						Login
					</button>

					<button
						type='button'
						className={`px-4 py-2 font-semibold transition-colors border-b ${
							!isLoading
								? ' text-primary rounded-b-2 border-b-primary'
								: ' text-gray-600 border-b-border'
						}`}
						onClick={() => setIsLoading(false)}
					>
						Register
					</button>
				</div>

				<form onSubmit={handleSubmit(onSubmitHandler)}>
					<Field
						label='Email'
						type='email'
						registration={register('email', {
							required: 'Email is required'
						})}
						error={errors.email?.message}
						placeholder='Enter your email'
					/>
					<Field
						label='Password'
						type='password'
						registration={register('password', {
							required: 'Password is required'
						})}
						error={errors.password?.message}
						placeholder='Enter your password'
					/>

					{!isLoading && (
						<Field
							label='Confirm Password'
							type='password'
							registration={register('confirmPassword', {
								required: 'Confirm Password is required',
								validate: value => value === password || "Passwords don't match"
							})}
							error={errors.confirmPassword?.message}
							placeholder='Repeat your password'
						/>
					)}

					<div className='flex justify-center mt-6'>
						<Button
							type='submit'
							disabled={!!errors.email || !!errors.password}
						>
							{isLoading ? 'Login' : 'Register'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
