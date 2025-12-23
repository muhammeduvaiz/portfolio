import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import './home.css'
import profilePic from '../../img/profile.png'

const Home = () => {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.from('.profile-pic', {
                xPercent: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from('.content > *', {
                    yPercent: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                }, '-=0.5')

        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <div id='home' className='home' ref={comp}>

                <img className='profile-pic' src={profilePic} alt="Profile" />
                <div className='content text-center md:text-left px-4'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-4'>Hi, <br /> I'm Muhammed Uvaiz.</h1>
                    <h2 className='text-xl md:text-3xl font-bold mb-6'>Full Stack Developer</h2>
                    <p className='text-base md:text-lg mb-6'>
                        I am focused on the MERN stack, creating end‑to‑end web applications
                        from responsive frontends to secure REST APIs and well‑structured databases.
                        My work includes building features like authentication, dashboards, and integrations that make products reliable and easy to use.
                    </p>
                    <p className='text-base md:text-lg mb-6'>
                        I enjoy turning ideas into working products, from planning the data models and API routes to polishing the UI and deploying to production. Recently, most of my projects have used React, Node.js, Express, and MongoDB, with Git and cloud platforms for version control and deployment
                    </p>
                </div>

            </div>
        </>
    )
}

export default Home