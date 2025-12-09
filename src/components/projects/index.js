import React, { useLayoutEffect, useRef } from 'react'
import './projects.css'
import projectData from './project.json'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: comp.current,
                    start: "top 80%", // Animates when top of projects hits 80% viewport
                }
            })

            tl.from('.projects', {
                xPercent: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from('.projects *', {
                    yPercent: 50,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'power3.out'
                }, '-=0.5')

        }, comp)

        return () => ctx.revert()
    }, [])
    return (
        <>
            <div id='projects' className='projects min-h-screen flex flex-col items-center justify-center text-center mb-12 text-white' ref={comp}>
                <h2 className='text-3xl md:text-5xl font-bold mb-4'>PROJECTS</h2>
                <p className='text-lg md:text-xl font-bold mb-4'>Here are some of my recent projects</p>

                <div className='container mx-auto px-4 py-8 flex flex-wrap justify-center gap-8' >
                    {projectData.projects.map((project, index) => {
                        return (
                            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg h-full flex flex-col ">
                                <img className="w-full h-48 object-cover" src={project.image} alt={project.name} />
                                <div className="px-6 py-4 flex-grow">
                                    <div className="font-bold text-xl mb-2">{project.name}</div>
                                    <p className="text-white-700 text-base">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    {project.framwork && project.framwork[0] && Object.values(project.framwork[0]).map((title, i) => (
                                        title ? (
                                            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                #{title}
                                            </span>
                                        ) : null
                                    ))}
                                </div>
                                {/* <div className="px-6 pt-4 pb-2">
                                <a href={project.link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">gitHub</a>
                            </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects