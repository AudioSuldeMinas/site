import Image from "next/image"
import Link from "next/link"
import wpp from "../public/icons/whatsapp.png"

export default function Wpp() {

    return (

        <div className="fixed bottom-5 right-5 opacity-80 hover:opacity-100">
            <Link href="/wpp">
            <Image src={wpp} alt="whatsapp"   width={60}/>
            </Link>
        </div>
    )

}