import { useState } from "react"

export default function SidebarNav(props) {

    const {imageSrc, sideBarLabel} = props
    const [active, setActive] = useState(false)
    const navItem = [
        {
            item: 'Home',
            icon: 'fa-house'
        },
        {
            item: 'Dashboard',
            icon: 'fa-gauge'
        },
        {
            item: 'Orders',
            icon: 'fa-calendar-days'
        },
        {
            item: 'Products',
            icon: 'fa-cubes-stacked'
        },
        {
            item: 'Customers',
            icon: 'fa-user'
        },
    ]



    return <>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img className="img-fluid" src={imageSrc}/>
                <span className="fs-4">{sideBarLabel}</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {navItem.map((e, i) => {
                    return <li className="nav-item" key={i}>
                        <a className={`nav-link link-light ${active == e.item && `active`}`} aria-current="page" onClick={() => setActive(e.item)}>
                            <span className="bi pe-none me-2" key={i}><i className={`fa-solid ${e.icon}`}></i></span>
                            {e.item}
                        </a>
                    </li>
                })}
            </ul>
            {/* Dropdown with avatar pic */}
            {/* <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div> */}
            {/* Dropdown with avatar pic */}
        </div>
    </>
};
