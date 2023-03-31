import Formulario from "./Formulario";
import Carrossel from 'components/Carrossel'

export default function Inicio() {
    return (
        <div>
            <div className="inicio flex pt-10 md:flex-row md:mt-0 items-center h-[650px] bg-bgMobile bg-no-repeat bg-cover md:bg-none md:h-[500px] md:pt-0">            
                <div className=" -mt-44 z-10">
                    <Formulario/>
                </div>
                <div className="absolute mt-[40px] hidden md:block ">
                <Carrossel/>
                </div>
                
            </div>

        </div>
    )

}