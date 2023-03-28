import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Nav1() {
    return (
        <div className="bg-tema-site p-2 flex justify-around text-sm">
            <ul className=" flex justify-center  text-branco gap-10">
                <l1 className='flex justify-center align-center items-center gap-2'>
                    <FontAwesomeIcon icon={faPhone}
                        className="text-white w-5" />
                    (35) 3332-3332</l1>
                <l1 className='flex justify-center align-center items-center gap-2'>
                    <FontAwesomeIcon icon={faWhatsapp}
                        className="text-white w-5" />
                    (35) 9 8895-0742
                </l1>
                <l1 className='flex justify-center align-center items-center gap-2'>
                    <FontAwesomeIcon icon={faInstagram} className="text-white w-5" />
                    @audiosuldeminas
                </l1>
            </ul>

            <button className="text-tema-site bg-branco rounded-2xl p-1 px-5">
                Agende sua avaliação!
            </button>

        </div>
    )
}