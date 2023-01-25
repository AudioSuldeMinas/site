import Head from 'next/head'
import Image from 'next/image'
import Logo from '../../public/Logo_Final.png'
import patrocinador from '../../public/patrocinador.png'
import Ana from '../../public/Ana.jpeg'
import Priscila from '../../public/Priscila.jpeg'
import { Inter } from '@next/font/google'
import Inicio from 'components/ Inicio'
import CarrosselDepoimento from 'components/CarrosselDepoimento'
import Nav from 'components/Nav'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Audio Sul de Minas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>
          <div className="flex flex-row justify-center  lg:justify-between p-2 bg-gradient-to-t from-branco to-second-tema-site drop-shadow-dark">
            <div className="hidden lg:block border-b border-solid border-tema-site w-1/4 mx-20 mt-10 text-tema-site drop-shadow font-bold">
              <p className=''>Informações de teste </p>
              <p>Av. Antônio Junqueira de Souza, 524 - Centro, São Lourenço - MG, 37470-000</p>
            </div>
            <div className='flex'>
              <Image src={Logo} alt="logo da empresa"
                className="w-80 drop-shadow-dark p-2"
              />
            </div>
            <div className="hidden lg:block text-end border-b border-solid border-tema-site w-1/4 pb-1 mx-20 mt-10  text-tema-site drop-shadow font-bold">
              <p>35 988454245</p>
              <p>Localidade</p>
            </div>
          </div>
          <Nav />
        </header>
        <Inicio />
        <div className="p-16 flex flex-col justify-center items-center text-center">
          <h2 className="text-tema-site text-2xl font-bold p-5">
            Algum testo aleatório
          </h2>
          <p className="w-screen p-5 md:w-[820px] flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at blanditiis itaque laboriosam cumque dolor harum mollitia tenetur est, eligendi aut sapiente molestias quas maiores fuga odio corporis adipisci reprehenderit!</p>
          <button className="bg-tema-site hover:bg-branco hover:text-tema-site rounded-2xl px-4 font-bold  border-double border-4 border-slate-300 hover:border-tema-site text-white">Learn More</button>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center md:flex-row bg-tema-site">
            <div>
              <Image src={Priscila} alt="imagen de perfil de um médico"
                className="w-44 border-double border-4 border-branco mt-10"
              />
            </div>
            <div className="p-2 md:pt-16 pb-10 md:pr-20 flex flex-col justify-center items-center text-center w-96">
              <h2 className="text-white text-2xl">Priscila Carla Guimarães</h2>
              <p className="text-white flex justify-center items-center text-start p-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe accusamus maxime, reprehenderit impedit est aspernatur officiis quaerat porro nisi nihil quas consequuntur necessitatibus. Animi impedit ipsum cumque, commodi iure id.
              </p>
              <button className="bg-tema-site hover:bg-branco hover:text-tema-site rounded-2xl px-4 font-bold  border-double border-4 border-slate-300 hover:border-tema-site text-white">Learn More</button>

            </div>
          </div>
        </div>

        <div className='text-center flex flex-col pt-20'>
          <div className=" mx-5 md:mx-20 border-b-2 border-tema-site">
            <h2 className='text-tema-site font-bold text-xl md:text-4xl'>Conheça nossa equipe</h2>
            <p className="p-5 flex text-center text-sm md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas ad doloremque id laborum distinctio quaerat quod, odio modi. Quo nemo dolore corporis sequi perspiciatis nobis accusamus totam tenetur error.</p>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mt-20'>

            <div className="flex flex-col md:flex-row justify-center items-center gap-20 pb-20 ">

            <div className=" bg-branco flex flex-col justify-center items-center border-double border-4 border-tema-site w-80 h-[502px]">
                  <Image src={Priscila} alt="foto de perfil do médico"
                    className="h-[350px] p-2"
                  />
                  <h2 className="text-tema-site text-2xl font-bold p-2">Priscila Carla Guimarães</h2>
                  <p>Fonoaudióloga Audiologista</p>
                  <button className="bg-tema-site hover:bg-branco hover:text-tema-site rounded-2xl px-4 font-bold  border-double border-4 border-slate-300 hover:border-tema-site text-white m-5">Learn More</button>
                </div>

              <div className=" bg-branco flex flex-col justify-center items-center border-double border-4 border-tema-site w-80 h-[502px]">
                <Image src={Ana} alt="foto de perfil do médico"
                  className="h-[350px] p-2"
                />
                <h2 className="text-tema-site text-2xl font-bold p-2">Ana Carolina Mazulka</h2>
                <p>Fonoaudióloga Audiologista</p>
                <button className="bg-tema-site hover:bg-branco hover:text-tema-site rounded-2xl px-4 font-bold  border-double border-4 border-slate-300 hover:border-tema-site text-white m-5">Learn More</button>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-20 pb-20">
              </div>
            </div>

          </div>
          <div className='flex flex-col justify-center items-center '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.1291334886274!2d-45.05481063750276!3d-22.117748345847446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb4b93690fc911%3A0xa55df95897731891!2sAv.%20Ant%C3%B4nio%20Junqueira%20de%20Souza%2C%20524%20-%20Centro%2C%20S%C3%A3o%20Louren%C3%A7o%20-%20MG%2C%2037470-000!5e0!3m2!1spt-BR!2sbr!4v1674233234286!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-screen min-w-[320px] h-96 border-double border-4 border-tema-site'>
            </iframe>
            <div className='w-96 h-96 p-10'>
              <p className='text-tema-site font-bold'>
                Av. Antônio Junqueira de Souza, 524 - Centro, São Lourenço - MG, 37470-000
              </p>
            </div>

          </div>
        </div>

        <div className="bg-tema-site">
          <CarrosselDepoimento />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex md:flex-row md:justify-center md:p-5 md:items-end w-screen h-44 md:gap-10">
          <Image src={patrocinador} className="w-14 md:w-44" />
          <Image src={patrocinador} className="w-14 md:w-44" />
          <Image src={patrocinador} className="w-14 md:w-44" />
          <Image src={patrocinador} className="w-14 md:w-44" />

        </div>

        <div className=' bg-tema-site flex justify-around items-center text-white'>
          <div className="bg-tema-site flex justify-center items-center gap-10 p-5">
            <Link href="https://instagram.com/audiosuldeminas?igshid=NTdlMDg3MTY=">
              <FontAwesomeIcon icon={faInstagram} className="text-white w-8" />
            </Link>
            <Link href="/???">
              <FontAwesomeIcon icon={faFacebook} className="text-white w-8" />
            </Link>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <footer className='p-10 bg-black text-white'>
          <div className="flex">
            <div className='w-1/2 mx-5'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi itaque iste, repudiandae assumenda mollitia, nisi natus eius voluptates veritatis eaque modi aperiam magni saepe maiores nostrum inventore impedit cum!</p>
            </div>
            <div >
              <ul>
                <li className="flex flex-col mx-10">
                  <h2 className='pb-5'>Quick Links</h2>
                  <Link href="/?">Teste</Link>
                  <Link href="/?">Teste</Link>
                  <Link href="/?">Teste</Link>
                  <Link href="/?">Teste</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-between mx-5 py-10 mt-10  border-b border-solid border-branco  border-t '>
            <p>teste</p>
            <p>99999999999</p>
          </div>
        </footer>
      </div>
    </>
  )
}
