'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'

import styles from './Layout.module.scss'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
	const [isShowedsidebar, setIsSHowedSidebar] = useState(true)

	const toggleSIdebar = () => {
		setIsSHowedSidebar(!isShowedsidebar)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen',
				isShowedsidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<Sidebar toggleSIdebar={toggleSIdebar} />
			<Content>{children}</Content>
		</main>
	)
}

export default Layout
