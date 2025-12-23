import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LogoLoop } from '../../component/LogoLoop';
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './contact.css';

const techLogos = [
    { node: <FaGithub />, title: "Github", href: "https://github.com/muhammeduvaiz" },
    { node: <FaLinkedin />, title: "Linkedin", href: "https://www.linkedin.com/in/muhammed-uvaiz/" },
    { node: <FaInstagram />, title: "Instagram", href: "https://www.instagram.com/uvaiz.insta/" },
    { node: <FaXTwitter />, title: "Twitter", href: "https://x.com/MuhammedUvaiz" },
    { node: <FaWhatsapp />, title: "Whatsapp", href: "https://wa.me/971544997697" },
];

// Alternative with image sources
// const imageLogos = [
//     { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//     { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//     { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

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
        <div id='contact' ref={comp} className='min-h-screen flex flex-col items-center justify-center text-white py-12 md:py-20'>
            <div className='text-center max-w-2xl px-4'>
                <h2 className='contact-title text-3xl md:text-5xl font-bold mb-8'>Get In Touch</h2>
                <div className='contact-content'>
                    <p className='text-base md:text-xl mb-8'>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                        <a
                            href="mailto:muhammeduvaiz@outlook.com"
                            className="border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
                        >
                            Say Hello
                        </a>
                    </div>
                </div>
            </div>

            <div className='mt-12 md:mt-20 opacity-70'>
                <div className="logo-container md:w-[350px]" style={{ height: '47px', position: 'relative', overflow: 'hidden' }}>
                    {/* Basic horizontal loop */}
                    <LogoLoop
                        logos={techLogos}
                        speed={80}
                        direction="left"
                        logoHeight={40}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        // fadeOutColor="rgba(0, 0, 0, 0.35)"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>

            <div className='mt-12 md:mt-20 text-center text-gray-500'>
                <span>© 2025 Muhammed Uvaiz</span>
            </div>
        </div>
    )
}

export default Contact