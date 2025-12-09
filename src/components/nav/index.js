import React from 'react'
import PillNav from '../../component/PillNav.jsx';
import './nav.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <PillNav
                items={[
                    { label: 'Home', href: '#home' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Skills', href: '#skills' },
                    { label: 'Contact', href: '#contact' }
                ]}
                activeHref="/"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#ffffff"
                pillColor="transparent"
                hoveredPillTextColor="#060111"
                pillTextColor="#ffffff"
            />
        </div>
    )
}

export default Navbar