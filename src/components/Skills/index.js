import React, { useLayoutEffect, useRef } from 'react'
import Magnet from '../../component/Magnet'
import skillData from './skills.json'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: comp.current,
                    start: "top 60%",
                }
            })

            tl.from('.skills-title', {
                yPercent: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from('.skill-item', {
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.7)'
                }, '-=0.5')

        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div id='skills' ref={comp} className='min-h-screen py-20 flex flex-col items-center justify-center w-full'>
            <div className='skills-title text-center text-white mb-20'>
                <h2 className='text-3xl md:text-5xl font-bold mb-4'>SKILLS</h2>
                <p className='text-lg md:text-xl font-bold'>Here are some of my technical skills</p>
            </div>
            <Magnet padding={100} disabled={false} magnetStrength={3}>
                <div className="flex gap-4 flex-wrap justify-center w-[95%] md:max-w-[80%] mx-auto text-center">
                    {skillData.skills.map((skill, index) => (
                        <span key={index} className="skill-item text-xl text-white font-bold bg-black px-4 py-2 rounded-full cursor-pointer hover:bg-gray-700 transition-colors border-2 border-white">
                            {skill.name}
                        </span>
                    ))}
                </div>
            </Magnet>
        </div>
    )
}

export default Skills