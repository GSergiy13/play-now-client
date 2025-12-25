import { useMutation } from '@tanstack/react-query'
import { type ChangeEvent, useCallback } from 'react'
import toast from 'react-hot-toast'

import { fileService } from '@/services/file.service'

type IUseUpload = (props: { onChange: (...enent: any[]) => void; folder?: string }) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
}

export const useUpload: IUseUpload = ({ onChange, folder }) => {
	const { mutate, isPending } = useMutation({
		mutationKey: ['uploadFile'],
		mutationFn: (data: FormData) => fileService.upload(data),
		onSuccess: ({ data }) => {
			onChange(data[0].url)
		},

		onError: error => {
			console.log('Upload error:', error)
			toast.error(error?.message || 'File upload failed')
		}
	})

	const uploadFile = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files

			if (!files?.length) return

			const formData = new FormData()
			formData.append('file', files[0])

			mutate(formData)
		},
		[mutate]
	)

	return {
		uploadFile,
		isLoading: isPending
	}
}
