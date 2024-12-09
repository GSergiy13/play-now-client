import SidebarHeader from './header/SidebarHeader'
import SidebarMenu from './menu/SidebarMenu'
import SidebarSub from './menu/subscriptions/SidebarSub'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

const Sidebar = ({ toggleSIdebar }: { toggleSIdebar: () => void }) => {
	return (
		<aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSIdebar={toggleSIdebar} />

			<SidebarMenu items={SIDEBAR_DATA} />
			<SidebarSub />
			<SidebarMenu
				title='More form play_naw'
				items={MORE_SIDEBAR_DATA}
			/>
		</aside>
	)
}

export default Sidebar
