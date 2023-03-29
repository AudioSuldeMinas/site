import { useState } from "react"


export default function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefones] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || telefone === "") {
            alert("Preencha todos os campos")
            return;
        }
        alert("teste")
    }

    return (
        <div >
            <div className="w-[305px] h-[380px] flex justify-center items-center md:right-32 md:top-48 md:absolute border-2 border-branco rounded-large text-sm">
                <form
                    onSubmit={sendEmail}
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
                        className="rounded-3xl w-48 p-1 text-sm text-black"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label className="text-sm p-1">
                        E-mail:
                    </label>
                    <input type="text" name="name"
                        className="rounded-3xl w-48 p-1 text-sm text-black"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label className="text-sm p-1">
                        Telefone
                    </label>
                    <input
                        className="rounded-3xl w-48 p-1 text-sm text-black"
                        onChange={(e) => setTelefones(e.target.value)}
                        value={telefone}
                    />
                    <input type="submit" value="Enviar"
                        className="p-1 mt-6 rounded-3xl px-4 bg-branco text-tema-site text-sm w-48 cursor-pointer hover:text-branco hover:bg-zinc-800 transition ease-in-out duration-300"
                    />

                </form>
            </div>

        </div>
    )
}