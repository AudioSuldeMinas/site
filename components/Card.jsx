import Image from 'next/image';
import aparelho from "../public/aparelho.jpeg"
export default function Card({ title, content }) {
    return (
        <div className="w-52 border border-tema-site rounded-3xl flex flex-col justify-center items-center">

            <div className="bg-tema-site rounded-t-3xl w-full text-center p-2 text-branco font-bold">
                {title}
            </div>
            <div className="w-full h-52 p-2 text-justify">
                <Image src={aparelho} 
                />
                {content}
            </div>
            <div className="bg-tema-site rounded-b-3xl w-full justify-center items-center p-2">
                <button className="text-center w-full text-branco font-bold">
                    saiba Mais
                </button>
            </div>
        </div>
    )
}