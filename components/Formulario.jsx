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
            <div className="w-60">
                <form
                    onSubmit={sendEmail}
                    className="flex flex-col p-4 bg-tema-site rounded-2xl px-4  border-double border-4 border-branco text-white"
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
                    className="p-2 mt-2 bg-tema-site hover:bg-branco hover:text-tema-site rounded-2xl px-4  border-double border-4 border-branco hover:border-tema-site text-white"
                    />
                    
                </form>
            </div>

        </div>
    )
}