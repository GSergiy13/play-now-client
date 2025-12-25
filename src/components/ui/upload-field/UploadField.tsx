import { Upload } from 'lucide-react'
import { useId } from 'react'
import type { FieldError } from 'react-hook-form'

import { ImagePreview } from './ImagePreview'
import { useUpload } from './useUpload'

interface Props {
	folder?: string
	value?: string
	onChange: (url: string) => void
	label?: string
	error?: FieldError
	className?: string
	isImage?: boolean
	aspectRatio?: '16:9' | '1:1' | '9:16'
	overlay?: boolean
}

export const UploadField = ({
	folder,
	value,
	onChange,
	label,
	error,
	className,
	isImage = true,
	aspectRatio = '1:1',
	overlay
}: Props) => {
	const { isLoading, uploadFile } = useUpload({ onChange, folder })

	const inputId = useId()

	return (
		<div className={className}>
			<label
				htmlFor={inputId}
				className='block text-gray-400 font-semibold mb-2'
			>
				{label}
			</label>

			<label
				htmlFor={inputId}
				className='flex items-center px-4 py-2 bg-primary text-white rounded-lg shadow-lg cursor-pointer hover:bg-primary/30 w-fit'
			>
				<Upload className='mr-2' />
				<span className='text-sm'>Choose File</span>
			</label>

			<input
				id={inputId}
				type='file'
				onChange={uploadFile}
				accept='image/*'
				className=' hidden'
			/>

			{error && <p className='text-sm text-red-600 mt-1'>{error.message}</p>}

			{isImage && (
				<div className='mt-3'>
					<ImagePreview
						isLoading={isLoading}
						value={value}
						overlay={'/overlay.png'}
						aspectRatio={aspectRatio}
					/>
				</div>
			)}
		</div>
	)
}
