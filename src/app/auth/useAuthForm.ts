import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import type ReCAPTCHA from 'react-google-recaptcha'
import type { SubmitHandler, UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

import { PAGE } from '@/config/public-page.config'

import type { IAuthData, IAuthForm } from './auth-form.types'
import { authService } from '@/services/auth.service'
import { useAppDispatch } from '@/store'

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<IAuthData>) {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const dispatch = useAppDispatch()

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const {
		mutate,
		isPending: isAuthPending,
		mutateAsync
	} = useMutation({
		mutationKey: [type],
		mutationFn: (data: IAuthData) => authService.main(type, data, recaptchaRef.current?.getValue())
	})

	const onSubmitHandler: SubmitHandler<IAuthForm> = ({ email, password }) => {
		const token = recaptchaRef.current?.getValue()

		if (!token) {
			toast.error('Please complete the reCAPTCHA', {
				id: 'recaptcha-error'
			})
			return
		}

		toast.promise(mutateAsync({ email, password }), {
			loading: 'Processing...',
			success: () => {
				startTransition(() => {
					reset()
					router.push(PAGE.HOME)
				})

				return 'Success login!'
			},
			error: e => {
				if (axios.isAxiosError(e)) {
					return e.response?.data.message
				}
			}
		})
	}

	const isLoading = isPending || isAuthPending

	return { onSubmitHandler, isLoading, recaptchaRef }
}
