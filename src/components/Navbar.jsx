import { useState } from "react"
import { NavLink } from "react-router-dom"
const List = ({ addClass }) => {
    return (

        <ul className={`flex ${addClass}  text-white text-sm  md:text-base w-screen md:w-2/4 justify-end mr-4 py-3`}>
            <NavLink to={"/"}>    <li className="list-none transition-all m-auto md:mx-4 rounded-full px-3 py-1 hover:bg-[#8989895f]">Home</li>
            </NavLink>
            <NavLink to={"/About"}>    <li className="list-none transition-all m-auto md:mx-4 rounded-full px-3 py-1 hover:bg-[#8989895f]">About</li>
            </NavLink>
            <NavLink to={"/Projects"}>    <li className="list-none transition-all m-auto md:mx-4 rounded-full px-3 py-1 hover:bg-[#8989895f]">Projects</li>

            </NavLink>
            <NavLink to={"/ContactMe"}>    <li className="list-none transition-all m-auto md:mx-4 rounded-full px-3 py-1 hover:bg-[#8989895f]">Contact Me</li>
            </NavLink>
        </ul>
    )
}
const Navbar = () => {
    const [getMenu, setMenu] = useState(false);
   
    return (
        <>
            <nav className="sticky top-0 z-10 w-screen h-max md:h-16 bg-[#2c2e3a] flex justify-between flex-wrap">
                <div className="text-white w-11/12 text-xl  md:text-2xl md:w-max h-max mx-auto md:mx-14 my-autov py-3 flex justify-between items-center ">
                    <div className="material-symbols-outlined block md:hidden mx-4 my-auto" onClick={() => { setMenu(!getMenu) }}>menu</div>
                    <div>Portfolio</div>
                </div>
                <List addClass="hidden md:flex" />
                {getMenu && <List addClass="flex md:hidden" />}
            </nav>


        </>
    )
}
export default Navbar;