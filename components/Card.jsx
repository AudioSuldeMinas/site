import Image from 'next/image';
import aparelho from "../public/aparelho.jpeg"
export default function Card({ title, content }) {
    return (
        <div className="w-64 lg:w-52 border border-tema-site rounded-3xl flex flex-col justify-center items-center">

            <div className="bg-tema-site rounded-t-3xl w-full text-center p-2 text-branco font-bold">
                {title}
            </div>
            <div className="w-full h-52 p-2 text-justify">
                <Image src={aparelho}
                className='h-32 lg:h-auto'
                />
                {content}
            </div>

            <button className=" text-center w-full text-branco font-bold bg-tema-site hover:bg-zinc-800 transition ease-in-out duration-300 rounded-b-3xl justify-center items-center p-2">
                Saiba Mais
            </button>

        </div>
    )
}