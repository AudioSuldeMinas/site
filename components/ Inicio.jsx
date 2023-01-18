import Formulario from "./Formulario";

export default function Inicio() {
    return (
        <div>
            <div className="flex justify-center items-center h-[550px]">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold text-slate-700">NuWave</h2>
                    <h1 className="text-4xl uppercase text-slate-400 p-2 drop-shadow-dark font-bold border-b-2 border-t-2 border-slate-900"> <spam className="text-slate-700">Hearing</spam> Test</h1>
                    <h2 className="text-xl font-bold text-slate-700 p-5">
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <button className="bg-slate-700 rounded-2xl px-4  border-double border-4 border-slate-300 text-white">Learn More</button>
                </div>
                <div>
                    <Formulario/>
                </div>
            </div>

        </div>
    )

}