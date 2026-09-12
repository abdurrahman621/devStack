import Logo from "../assets/logo-text.png"
import Hamburger from "../assets/hamburger.png"

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 bg-white shadow-sm'>
            <nav className=" px-5 py-4 lg:px-10">
                <div className='hidden items-center justify-between md:flex'>
                    <div>
                        <img src={Logo} alt="DevStack" />
                    </div>
                    <div>
                        <ul className='flex items-center gap-6 '>
                            <li className='text-[#DB2777]'><a href="">Home</a></li>
                            <li><a href="">Technologies</a> </li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>

                    </div>


                    <div className='flex items-center gap-4'>
                        <button>Sign In</button>
                        <button className='rounded-full bg-[#D91B7E] text-white px-5 py-2'>Sign Up</button>
                    </div>
                </div>
                {/*=====Mobile Navbar==== */}
                <div className="flex items-center justify-between md:hidden">
                    <button aria-label="Open menu" className="flex items-center justify-center"><img src={Hamburger} alt="Open menu" /></button>

                    <div>
                        <img src={Logo} alt="DevStack" />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-sm">Sign In</button>
                        <button className="rounded-full bg-[#D91B7E] px-3 py-1.5 text-sm text-white">Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;