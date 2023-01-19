import Link from "next/link";
import { useState } from "react"; // import state
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    

    return (
        <div className="flex items-start">

            <nav className="drop-shadow-dark1 z-20">
                <section className="MOBILE-MENU mx-5 md:hidden ">
                    <div
                        className="HAMBURGER-ICON space-y-2 mt-2 w-screen"
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8  bg-slate-600"></span>
                        <span className="block h-0.5 w-8 bg-slate-600"></span>
                        <span className="block h-0.5 w-8 bg-slate-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} >
                        <div
                            className="CROSS-ICON fixed z-50 top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-white cursor-pointer mr-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN  bg-slate-600 bg-no-repeat space-y-2  text-white font-bold flex flex-col fixed items-center -ml-10 w-full h-screen">
                            <li className="border w-72 text-center  border-white rounded-md mt-20  text-xl">
                                <Link href="/" className="font-bold block p-2">Início</Link>
                            </li>
                            <li className="border w-72 text-center border-white rounded-md  text-xl">
                                <Link href="/sobre" className="font-bold block p-2">Sobre nós</Link>
                            </li>
                            <li className="border w-72 text-center  border-white rounded-md  text-xl">
                                <Link href="/cidade" className="font-bold block p-2">São Lourenço</Link>
                            </li>
                            <li className="border w-72 text-center border-white rounded-md  text-xl">
                                <Link href="/imoveis" className="font-bold block p-2">Imóveis</Link>
                            </li>
                            <li className="border w-72 text-center border-white rounded-md text-xl">
                                <Link href="/contato " className="font-bold block p-2">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden  md:flex md:justify-center md:items-center bg-slate-400 w-screen p-2 text-slate-700 font-bold items-center" >
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/" className= "">
                        <p className="hover:text-white hover:font-bold hover:transition">Início</p></Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/sobre " className=""
                        >
                            <p className="hover:text-white hover:font-bold  hover:transition">
                            Sobre nós
                            </p>
                        </Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/cidade"className= "">
                        <p className="hover:text-white hover:font-bold  hover:transition">São Lourenço</p>
                        </Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/imoveis" className="">
                        <p  className="hover:text-white hover:font-bold  hover:transition">Imóveis</p>
                        </Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/contato" className= "">
                        <p className="hover:text-white hover:font-bold hover:transition">Contato</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      .nonActive {
        color: white;
      }
      .active {
       color: rgb(29 78 216 );
       font-weight: bold;
      }
    `}</style>
        </div>
    );
}