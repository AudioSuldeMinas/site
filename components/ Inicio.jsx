import Formulario from "./Formulario";
import Carrossel from 'components/Carrossel'

export default function Inicio() {
    return (
        <div>
            <div className="flex flex-col mt-10 md:flex-row md:mt-0 justify-center items-center h-[500px]">
                <div className="flex flex-col justify-center items-center z-10">
                    <h2 className="text-lg md:text-2xl  font-bold text-tema-site drop-shadow-dark1">NuWave</h2>
                    <h1 className="text-4xl md:text-6xl uppercase text-second-tema-site p-2 drop-shadow-dark1 font-bold border-b-2 border-t-2 border-second-tema-site  "> <spam className="text-tema-site">Hearing</spam> Test</h1>
                    <h2 className="text-lg md:text-2xl  font-bold text-tema-site p-5 drop-shadow-dark1">
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <button className="bg-tema-site hover:bg-branco hover:text-tema-site rounded-2xl px-4 font-bold  border-double border-4 border-slate-300 hover:border-tema-site text-white">Learn More</button>
                </div>
                <div className="mt-5 z-10">
                    <Formulario/>
                </div>
                <div className="absolute mt-[40px] hidden md:block ">
                <Carrossel/>
                </div>
                
            </div>

        </div>
    )

}