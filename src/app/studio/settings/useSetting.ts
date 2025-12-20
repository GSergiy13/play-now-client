import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'

import type { ISettingData } from './setting.type'
import { userService } from '@/services/user.service'

export function useSetting() {
	const form = useForm<ISettingData>({
		mode: 'onChange'
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['update-setting'],
		mutationFn: (data: ISettingData) => userService.UpdateProfile(data)
	})

	const onSubmitHandler: SubmitHandler<ISettingData> = data => {
		mutate(data)
	}

	return { form, isLoading: isPending, onSubmitHandler }
}
