import SidebarHeader from './header/SidebarHeader'
import SidebarMenu from './menu/SidebarMenu'
import SidebarSub from './menu/subscriptions/SidebarSub'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

const Sidebar = ({ toggleSIdebar }: { toggleSIdebar: () => void }) => {
	return (
		<aside className='relative p-layout border-r border-border whitespace-nowrap '>
			<div className=' sticky top-5 overflow-hidden'>
				<SidebarHeader toggleSIdebar={toggleSIdebar} />

				<SidebarMenu items={SIDEBAR_DATA} />
				<SidebarSub />
				<SidebarMenu
					title='More form MultiMedia'
					items={MORE_SIDEBAR_DATA}
				/>
			</div>
		</aside>
	)
}

export default Sidebar
