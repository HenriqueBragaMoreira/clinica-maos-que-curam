import Image from 'next/image'
import logo from '../../public/logo.svg'
import { BsWhatsapp } from 'react-icons/bs';

export default function Home() {
  return (

      
    <div>
      <main className='pl-36 pr-44 pt-3'>

        <div className='flex h-screen'>
          <div className=' pt-48 text-center pr-6'>
            <h1 className=' pb-20 text-7xl font-cursive'>Quiropraxia Mãos Que Curam</h1>
            <p>Não espere mais para dar o primeiro passo em direção a uma vida <br /> mais saudável e sem dor. </p> <br />
            <p>Marque sua consulta conosco hoje mesmo e descubra como a <br /> quiropraxia pode melhorar a sua qualidade de vida.</p>
          </div>
        
          <div>
            <Image
              src={logo}
              alt="Picture of the author"
              width={520}
              height={720}
            />
          </div>

          <a href="https://api.whatsapp.com/message/B76M6ZWBYLBZA1?autoload=1&app_absent=0" target='_blank'>
            <div className=' fixed bottom-8 right-8 bg-white rounded-full p-4 hover:bg-green-400 text-green-400 hover:text-white ease-in duration-200'>
              <BsWhatsapp className=' text-4xl'/>
            </div>
          </a>

        </div>

        <div className='text-center h-screen'>
          <h1 className=' pt-24 text-7xl'>Quem Somos</h1>
          <p className=' pt-14'>Bem-vindo à nossa clínica, onde a saúde e o equilíbrio se encontram! Se você está em busca de alívio <br /> da dor, melhorias na postura ou deseja viver uma vida mais saudável e feliz, você está no lugar certo.</p>
          <p className=' pt-10'>Estamos aqui para ajudar você a se sentir melhor, viver melhor e alcançar o seu máximo potencial de saúde. Junte-se a nós nesta <br /> jornada para um bem-estar completo. Aguardamos ansiosamente por sua visita!</p>

          <div className='flex justify-between items-center'>
            <div className=' mt-20 bg-gray-500 w-80 mr-6 h-72'>
              AA
            </div>
            <div className=' mt-20 bg-gray-500 w-80 mr-6 h-72'>
              AA
            </div>
            <div className=' mt-20 bg-gray-500 w-80 h-72'>
              AA
            </div>
          </div>
          
        </div>

        <div className='text-center h-screen'>
          <h1 className=' pt-40 text-7xl pb-10'>Nossos Tratamentos</h1>
          <p>Entendemos que cada paciente é único, com necessidades e metas individuais. Nosso compromisso é fornecer um atendimento <br /> personalizado e compassivo, adaptado às suas necessidades específicas. Trabalharemos em estreita colaboração com você para criar <br /> um plano de tratamento que funcione.</p>
          <div className='flex justify-between items-center'>
            <div className='pt-6 mt-20 bg-purple-300 w-72 mr-6 h-72 rounded-3xl font-bold text-xl'>
              Pacote de 5 sessões
            </div>
            <div className='pt-6 mt-20 bg-purple-300 w-72 mr-6 h-72 rounded-3xl font-bold text-xl'>
              Pacote de 10 sessões
            </div>
            <div className='pt-6 mt-20 bg-purple-300 w-72 mr-6 h-72 rounded-3xl font-bold text-xl'>
              Pacote de 15 sessões
            </div>
            <div className='pt-6 mt-20 bg-purple-300 w-72 h-72 rounded-3xl font-bold text-xl'>
              Pacote de 20 sessões
            </div>
          </div>
        </div>

        <div className='text-center h-screen'>
          <h1 className=' pt-40 text-7xl pb-10'>Onde Ficamos Localizados</h1>
          <div className='flex'>
            <div className=' mt-20 bg-purple-300 w-96 mr-6 h-96 rounded-3xl'>
              <p className='pt-6 font-bold text-xl'>Contato</p>
            </div>
          </div>
        </div>
        
      </main>
      <footer className=' mt-16 bg-black w-full h-10 text-white text-center'>Desenvolved by braga</footer>
    </div>
  )
}
