import { Dot, Radio } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { ISidebarSubscription } from '../../sidebar.types'

interface Props {
	item: ISidebarSubscription
}

const SubItem = ({ item }: Props) => {
	return (
		<li>
			<Link href={item.link}>
				{item.avatar && (
					<Image
						src={item.avatar}
						width={20}
						height={20}
						alt={item.label}
					/>
				)}

				<span>{item.label}</span>

				{item.isLiveNow && <Radio />}
				{item.isRecentUpload && <Dot />}
			</Link>
		</li>
	)
}
export default SubItem
