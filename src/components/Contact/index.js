import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: comp.current,
                    start: "top 75%",
                    // markers: true
                }
            })

            tl.from('.contact-title', {
                yPercent: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from('.contact-content > *', {
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
        <div id='contact' ref={comp} className='min-h-screen flex flex-col items-center justify-center text-white py-20'>
            <div className='text-center max-w-2xl px-4'>
                <h2 className='contact-title text-3xl md:text-5xl font-bold mb-8'>Get In Touch</h2>
                <div className='contact-content'>
                    <p className='text-base md:text-xl mb-8'>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                        <a
                            href="mailto:muhammeduvaiz@outlook.com"
                            className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
                        >
                            Say Hello
                        </a>
                    </div>
                    <div className='mt-20 flex gap-8 justify-center opacity-70'>
                        {/* Add social icons here if needed */}
                        <span>© 2025 Muhammed Uvaiz</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact