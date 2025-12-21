import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import type { ISettingData } from './setting.type'
import { userService } from '@/services/user.service'

export function useSetting() {
	const form = useForm<ISettingData>({
		mode: 'onChange'
	})

	const { profile, isSuccess } = useProfile()

	useEffect(() => {
		if (!isSuccess) return

		form.reset(profile)
	}, [profile, isSuccess, form])

	const { mutate, isPending } = useMutation({
		mutationKey: ['update-setting'],
		mutationFn: (data: ISettingData) => userService.UpdateProfile(data)
	})

	const onSubmitHandler: SubmitHandler<ISettingData> = data => {
		mutate(data)
	}

	return { formObject: form, isLoading: isPending, onSubmitHandler }
}
