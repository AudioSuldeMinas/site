import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


export default function Nav1() {
    return (
        <div className="bg-tema-site p-2 flex justify-around text-sm">
            <ul className=" flex justify-center  text-branco gap-10">
                <l1 className='flex justify-center align-center items-center gap-2'>
                    <FontAwesomeIcon icon={faPhone}
                        className="text-white w-5 bg-zinc-800 rounded-full p-1" />
                    (35) 3332-3332</l1>
                <l1 className='flex justify-center align-center items-center gap-2'>
                    <FontAwesomeIcon icon={faWhatsapp}
                        className="text-white w-5 bg-zinc-800 rounded-full p-1" />
                    (35) 9 8895-0742
                </l1>
                <l1 className='flex justify-center align-center items-center gap-2'>
                    <Link href={"https://www.instagram.com/audiosuldeminas/"} target='blank' className='flex justify-center align-center items-center gap-2 hover:text-zinc-800 transition ease-in-out duration-300'>
                        <FontAwesomeIcon icon={faInstagram} className="text-white w-5 bg-zinc-800 rounded-full p-1 " />
                        @audiosuldeminas
                    </Link>

                </l1>
            </ul>

            <button className=" flex justify-center items-center text-tema-site bg-branco rounded-2xl p-1 px-5 hover:bg-zinc-800 hover:text-branco transition ease-in-out duration-300" >
                Agende sua avaliação!
            </button>

        </div>
    )
}