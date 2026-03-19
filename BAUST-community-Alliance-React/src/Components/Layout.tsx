
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar />
            <div id='main'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout