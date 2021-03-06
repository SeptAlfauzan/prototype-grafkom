import { useEffect, useState } from "react"
import Link from 'next/link'
import ImageComp from "./imagesHandler"
import githubImage from './../public/images/github (1).png'
import gameIcon from './../public/images/launcher icon.png'

export default function Navbar(){
    const [navActive, setNavActive] = useState(false)

    const toggleSidebar = () => {
        const navbar = document.querySelector('#navbar')
        navbar.classList.toggle('-translate-x-full')
        // setNavActive(!active)
    }

    useEffect(()=>{
        const navbar = document.querySelector('#navbar')
        const menu = document.querySelector('#menu')
        window.addEventListener('click', (e) => {
            if(!navbar.contains(e.target) && !menu.contains(e.target)){
                console.log((navActive));
                if(!navbar.classList.contains('-translate-x-full'))  toggleSidebar()
            }
        })
    }, [])
    return(
        <>
        <Button menu left fixed action={toggleSidebar} id="menu"/>
        <ul id="navbar" className="transition-all duration-300 fixed -translate-x-full md:translate-x-0 top-0 left-0 flex flex-col md:flex-row gap-4 w-3/4 md:w-full  h-screen md:h-auto z-50 bg-primary-medium md:bg-primary shadow-2xl  text-left pl-24 md:py-5 md:pr-10 md:justify-end">
        <Button action={toggleSidebar} id="close-menu"/>
        <div className="invisible md:visible justify-self-start self-start place-self-start mr-auto">
            <div className="flex flex-row">
            <div className="w-10 h-10 relative">
                <ImageComp img={gameIcon}/>
            </div>
            <h3 className="text-3xl ml-2">The Destitute Skelly</h3>
            </div>
        </div>
            <li>
                <a className="transition-all  duration-399 md:border-l-0 md:border-b-2  border-opacity-0 hover:bg-green-600 rounded bg-green-500 px-5 py-2 text-center" href="https://github.com/SeptAlfauzan/Computer-Graphic-s-Project/releases/download/v1.1.1/The.Destitute.Skellyv1.1.1.zip" onClick={toggleSidebar} download>
                Download
                </a>
            </li>
            <li>
                <a className="transition-all duration-399 pl-3 border-accent border-l-2 md:border-l-0 md:border-b-2 md:pl-0 border-opacity-0 hover:text-accent  hover:border-opacity-100" href="/#home" onClick={toggleSidebar}>Home</a>
            </li>
            <li>
                <a className="transition-all duration-399 pl-3 border-accent border-l-2 md:border-l-0 md:border-b-2 md:pl-0 border-opacity-0 hover:text-accent  hover:border-opacity-100" href="/#progress" onClick={toggleSidebar}>Progress</a>
            </li>
            <li>
                <a className="transition-all duration-399 pl-3 border-accent border-l-2 md:border-l-0 md:border-b-2 md:pl-0 border-opacity-0 hover:text-accent  hover:border-opacity-100" href="/#gameplay" onClick={toggleSidebar}>Gameplay</a>
            </li>
            <li>
                <a className="transition-all duration-399 pl-3 border-accent border-l-2 md:border-l-0 md:border-b-2 md:pl-0 border-opacity-0 hover:text-accent  hover:border-opacity-100" href="/#instalation" onClick={toggleSidebar}>Instalation</a>
            </li>
            <li>
                <a className="transition-all duration-399 pl-3 border-accent border-l-2 md:border-l-0 md:border-b-2 md:pl-0 border-opacity-0 hover:text-accent  hover:border-opacity-100" href="/#about-us" onClick={toggleSidebar}>About Us</a>
            </li>
            {/* <li>
                <div className="transition-all duration-399 pl-3 border-accent border-l-2 md:border-l-0 md:border-b-2 md:pl-0 border-opacity-0 hover:text-accent  hover:border-opacity-100" onClick={toggleSidebar}>
                    <Link href="/blogs">Blogs</Link>
                </div>
            </li> */}
            <li>
                <div className="transition-all duration-399 pl-3 border-accent border-l-2 rounded  md:border-2 md:pl-0 border-opacity-0 md:hover:scale-105  hover:border-opacity-100" onClick={toggleSidebar}>
                    <a href="https://github.com/SeptAlfauzan/Computer-Graphic-s-Project" target="_blank" >
                        <div className="w-10 h-10  relative bg-white rounded-full">
                            <ImageComp img={githubImage}/>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
        </>
    )
}

const Button = ({menu = false, action, id, left, fixed}) => {
    const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
    const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;

    return (
        <button onClick={action} id={id} className={`${!left ? "ml-auto": "ml-4"} button-action  mr-4 mt-4 bg-primary-medium hover:bg-primary-light shadow-lg rounded w-10 h-10 ${fixed? 'fixed z-50': ''} md:hidden`}>
            {menu? hamburgerIcon : closeIcon}
        </button>
    )
}