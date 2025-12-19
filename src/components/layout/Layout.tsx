'use client'

import cn from 'clsx'
import { type PropsWithChildren, useEffect, useState } from 'react'

import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'
import { authService } from '@/services/auth.service'

import styles from './Layout.module.scss'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
	const [isShowSidebar, setIsSShowSidebar] = useState(true)

	const toggleSidebar = () => {
		setIsSShowSidebar(!isShowSidebar)
	}

	useEffect(() => {
		authService.initializeAuth()
	}, [])

	return (
		<main
			className={cn(
				'flex min-h-screen',
				styles.initialSidebar,
				isShowSidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}

export default Layout
