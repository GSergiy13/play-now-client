'use client'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'

import { useSetting } from './useSetting'

export default function SettingForm() {
	const {
		formObject: {
			handleSubmit,
			register,
			formState: { errors }
		},
		isLoading,
		onSubmitHandler
	} = useSetting()

	return (
		<div className='w-3/4'>
			<form onSubmit={handleSubmit(onSubmitHandler)}>
				<div className='grid grid-cols-2 gap-6'>
					<div>
						<Field
							label='Name'
							type='text'
							registration={register('name')}
							error={errors.name?.message}
							placeholder='Enter your name'
						/>

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
							label='Slug (aliases)'
							type='text'
							registration={register('channel.slug')}
							error={errors.channel?.slug?.message}
							placeholder='Enter your slug'
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
						<Textarea
							label='Description'
							registration={register('channel.description')}
							error={errors.channel?.description?.message}
							placeholder='Enter your description'
						/>
					</div>

					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur reiciendis
						debitis excepturi, nihil ullam accusamus animi aut eveniet doloribus veritatis laborum.
						Nostrum esse culpa ducimus voluptatem nemo saepe recusandae.
					</div>
				</div>

				<div className=' mt-6'>
					<Button
						type='submit'
						isLoading={isLoading}
					>
						Update
					</Button>
				</div>
			</form>
		</div>
	)
}
