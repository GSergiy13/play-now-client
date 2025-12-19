export const errorCatch = (error: any): string => {
	const massage = error?.response?.data?.massage

	return massage
		? typeof error.response.data.massage === 'object'
			? massage[0]
			: massage
		: error?.message
}
