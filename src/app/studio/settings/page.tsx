import { Settings } from 'lucide-react'

import { Heading } from '@/ui/heading/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import SettingForm from './SettingForm'

export const metadata = {
	title: 'Studio Settings',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return (
		<div>
			<Heading
				Icon={Settings}
				isPageHeading
			>
				Setting Profile
			</Heading>

			<SettingForm />
		</div>
	)
}
