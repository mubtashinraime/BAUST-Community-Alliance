import logo from '../images/Baust-logo.png'
import '../Components/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='d-flex justify-content-betweenw'>
                <img className='logo-box' src={logo} alt="BAUST-LOGO" />
                <p id='baust-bold-p1'>The Voice of <span className='baust-bold'>BAUST-Community-Alliance</span></p>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {/* About */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown"
                                onClick={e => e.preventDefault()}
                            >
                                About
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/about" className="dropdown-item">About-Us</Link>
                                </li>
                            </ul>
                        </li>

                        {/* Our Works */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                onClick={e => e.preventDefault()}
                            >
                                Our-Works
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/category/blog" className="dropdown-item">Blog</Link></li>
                                <li><Link to="/category/story" className="dropdown-item">Story</Link></li>
                                <li><Link to="/category/publication" className="dropdown-item">Publication</Link></li>
                            </ul>
                        </li>

                        {/* Topics */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                onClick={e => e.preventDefault()}
                            >
                                Topics
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/category/as-a-software" className="dropdown-item">Software Engineer</Link></li>
                                <li><Link to="/category/higher-education" className="dropdown-item">Higher Education</Link></li>
                                <li><Link to="/category/as-a-lecturer" className="dropdown-item">Lecturer</Link></li>
                            </ul>
                        </li>

                        {/* Alliance Hub */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                onClick={e => e.preventDefault()}
                            >
                                Alliance Hub
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/category/allience-hub/link1" className="dropdown-item">Link-1</Link></li>
                                <li><Link to="/category/allience-hub/link2" className="dropdown-item">Link-2</Link></li>
                            </ul>
                        </li>

                    </ul>

                    {/* Search */}
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success">Search</button>
                    </form>

                </div>
            </nav >
        </>
    )
}

export default Navbar