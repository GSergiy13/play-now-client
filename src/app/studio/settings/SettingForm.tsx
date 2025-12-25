'use client'

import { Controller } from 'react-hook-form'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'
import { UploadField } from '@/ui/upload-field/UploadField'

import { useSetting } from './useSetting'

export default function SettingForm() {
	const {
		formObject: {
			handleSubmit,
			register,
			formState: { errors },
			control
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

					<div className='flex flex-col gap-10'>
						<div>
							<Controller
								name='channel.avatarUrl'
								control={control}
								render={({ field: { onChange, value }, fieldState: { error } }) => (
									<UploadField
										label='Upload Avatar'
										onChange={onChange}
										value={value}
										error={error}
									/>
								)}
							/>
						</div>
						<div>
							<Controller
								name='channel.bannerUrl'
								control={control}
								render={({ field: { onChange, value }, fieldState: { error } }) => (
									<UploadField
										label='Upload Banner'
										onChange={onChange}
										value={value}
										error={error}
										folder='banner'
										aspectRatio='16:9'
									/>
								)}
							/>
						</div>
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
