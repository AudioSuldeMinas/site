import { useState } from "react"


export default function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos")
            return;
        }
        alert("teste")
    }

    return (
        <div >
            <div>
                <form
                    onSubmit={sendEmail}
                    className="flex flex-col p-4 bg-slate-600 rounded-2xl px-4  border-double border-4 border-slate-300 text-white"
                >
                    <label className="mt-2">
                        Nome:
                    </label>
                    <input type="text" name="name" 
                    className="rounded p-2"
                    placeholder="Digite o seu nome"                   
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label className="mt-2">
                        E-mail:
                    </label>
                    <input type="text" name="name" 
                    className="rounded p-2"
                    placeholder="Digite seu e-mail"

                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label className="mt-2">
                        Mensagem:
                    </label>
                    <textarea
                        placeholder="Digite sua mensagem..."
                        className="rounded p-2"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <input type="submit" value="Enviar
                    "
                    className="p-2  border-double border-4 mt-2 rounded-2xl border-slate-300"
                    />
                </form>
            </div>

        </div>
    )
}