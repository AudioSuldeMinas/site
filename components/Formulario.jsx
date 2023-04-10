import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';

export default function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        

        let data = {
            name,
            email,
            tel
        }
        if (!name.trim() || !email.trim() || !tel.trim()) {
            window.alert("Preencha todos os campos")
            return;
        }
        if (name.length < 3) {
            window.alert('O nome deve conter 3 letras ou mais')
            return;
        }
        if (tel.length < 10) {
            window.alert("O número de telefone deve conter o DDD + 8 digitos para telefone fixo ou DDD + 9 digitos para celular")
            return;
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
                setTel('')
                alert('Contato Salvo!')
            }
        })
    }
    return (
        <div className="w-screen flex justify-center pt-5">
            <div className="w-[305px] h-[400px] flex justify-center items-center md:right-32 md:top-48 md:absolute border-2 border-branco rounded-large text-sm">
                <form
                    className="flex flex-col justify-center items-center p-8 w-72 h-96 bg-tema-site rounded-large  text-white "
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
                    <input type="text" name="name" value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        className="rounded-3xl w-48 p-1 px-2 text-sm text-black"
                    />

                    <label className="text-sm p-1">
                        E-mail:
                    </label>
                    <input type="text" name="email" value={email}

                        onChange={(e) => { setEmail(e.target.value) }}
                        className="rounded-3xl w-48 p-1 px-2 text-sm text-black"
                    />
                    <label className="text-sm p-1">
                        Telefone
                    </label>
                    <input
                        type='text' name='tel'
                        value={tel}
                        onChange={(e) => { setTel(e.target.value) }}
                        className="rounded-3xl w-48 p-1 px-2 text-sm text-black"
                    />
                    < input type='submit' onClick={(e) => { handleSubmit(e) }}
                        value="Enviar"
                        className="p-1 mt-6 rounded-3xl px-4 bg-branco text-tema-site text-sm w-48 cursor-pointer hover:text-branco hover:bg-zinc-800 transition ease-in-out duration-300 font-bold "
                    />

                    <ReCAPTCHA
                        size="invisible"
                        sitekey="6LegkWYlAAAAAENFxY2xdi4OjR8hyP4KgJii3Yol"
                    />
                </form>
            </div>
        </div>
    )
}