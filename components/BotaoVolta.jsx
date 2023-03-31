import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function BotaoVolta() {
    return (
        <div>
            <a href="#inicio" className='bg-branco fixed  bottom-5 right-5 text-tema-site hover:text-zinc-800 transition ease-in-out duration-300 rounded-full md:z-10'>
                <FontAwesomeIcon icon={faArrowAltCircleUp} className='h-12'/>
            </a>
        </div>
    )
}
