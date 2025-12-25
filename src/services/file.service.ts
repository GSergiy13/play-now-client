import { instance } from '@/app/api/axios'

class FileService {
	async upload(file: FormData, folder?: string) {
		return instance.post<{ url: string; name: string }[]>('/media', file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}

export const fileService = new FileService()
