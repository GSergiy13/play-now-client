import { useRouter } from 'next/navigation'
import { type KeyboardEvent, useState } from 'react'

import { PAGE } from '@/config/public-page.config'

interface Props {}

export const SearchField = ({}: Props) => {
	const router = useRouter()
	const [searchTerm, setSearchTerm] = useState('')

	const handelKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return
		e.preventDefault()

		if (searchTerm.trim().length === 0) return

		router.push(PAGE.SEARCH(searchTerm))
	}

	return (
		<div className='w-1/3'>
			<input
				type='search'
				placeholder='Search...'
				className='py-2 px-4 w-full outline-none border-none shadow-none bg-transparent'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handelKeyDown}
			/>
		</div>
	)
}
