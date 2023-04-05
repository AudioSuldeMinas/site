import { useState } from "react"


export default function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setBody('')
            }
        })
    }
    return (
        <div className="w-screen flex justify-center pt-5">
            <div className="w-[305px] h-[380px] flex justify-center items-center md:right-32 md:top-48 md:absolute border-2 border-branco rounded-large text-sm">
                <form
                    className="flex flex-col justify-center items-center p-8 w-72 h-92 bg-tema-site rounded-large  text-white "
                >
                    <h2 className="text-2xl font-bold">
                        Ligamos para você!
                    </h2>
                    <p className="text-sm">
                        Preencha o formulario abaixo,
                    </p>
                    <p className="text-sm">
                        e receba nosso contato
                    </p>
                    <label className="mt-2 text-sm p-1">
                        Nome:
                    </label>
                    <input type="text" name="name"
                        onChange={(e) => { setName(e.target.value) }}
                        className="rounded-3xl w-48 p-1 px-2 text-sm text-black"
                    />

                    <label className="text-sm p-1">
                        E-mail:
                    </label>
                    <input type="text" name="name"
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="rounded-3xl w-48 p-1 px-2 text-sm text-black"
                    />
                    <label className="text-sm p-1">
                        Telefone
                    </label>
                    <input
                        onChange={(e) => { setMessage(e.target.value) }}
                        className="rounded-3xl w-48 p-1 px-2 text-sm text-black"
                    />
                    < input type='submit' onClick={(e) => {
                        handleSubmit(e)
                    }}
                        value="Enviar"
                        className="p-1 mt-6 rounded-3xl px-4 bg-branco text-tema-site text-sm w-48 cursor-pointer hover:text-branco hover:bg-zinc-800 transition ease-in-out duration-300"
                    />
                </form>
            </div>
        </div>

    )
}