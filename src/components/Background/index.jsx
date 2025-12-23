import React from 'react'
import Galaxy from '../../component/Galaxy.jsx'

const Header = () => {
    return (
        <>
            {/* Basic usage
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Galaxy />
            </div> */}

            {/* With custom prop values */}
            <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={0.3}
                    glowIntensity={0.1}
                    saturation={0.1}
                    hueShift={50}
                />
            </div>
        </>
    )
}

export default Header