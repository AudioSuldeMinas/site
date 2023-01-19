import Formulario from "./Formulario";
import Carrossel from 'components/Carrossel'

export default function Inicio() {
    return (
        <div>
            <div className="flex flex-col mt-10 md:flex-row md:mt-0 justify-center items-center h-[500px]">
                <div className="flex flex-col justify-center items-center z-10">
                    <h2 className="text-2xl font-bold text-slate-600 drop-shadow-dark2">NuWave</h2>
                    <h1 className="text-6xl uppercase text-slate-400 p-2 drop-shadow-dark2 font-bold border-b-2 border-t-2 border-slate-900 "> <spam className="text-slate-600">Hearing</spam> Test</h1>
                    <h2 className="text-2xl font-bold text-slate-600 p-5 drop-shadow-dark2">
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <button className="bg-slate-600 rounded-2xl px-4  border-double border-4 border-slate-300 text-white ">Learn More</button>
                </div>
                <div className="mt-5 z-10">
                    <Formulario/>
                </div>
                <div className="absolute mt-[40px]">
                <Carrossel/>
                </div>
                
            </div>

        </div>
    )

}