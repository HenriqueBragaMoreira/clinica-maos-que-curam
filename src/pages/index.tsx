import Image from 'next/image'
import logo from '../../public/logo.svg'
import { BsWhatsapp } from 'react-icons/bs';

export default function Home() {
  return (
    <div className='pl-36 pr-44'>

    
      <div className='flex pt-3'>
        <div className=' pt-48 text-center mr-44'>
          <h1 className=' pb-20 text-7xl font-cursive'>Quiropraxia Mãos Que Curam</h1>
          <p>Não espere mais para dar o primeiro passo em direção a uma vida <br /> mais saudável e sem dor. </p> <br />
          <p>Marque sua consulta conosco hoje mesmo e descubra como a <br /> quiropraxia pode melhorar a sua qualidade de vida.</p>
        </div>
      
        <Image
            src={logo}
            alt="Picture of the author"
            width={396}
            height={733}
        />

        <a href="https://api.whatsapp.com/message/B76M6ZWBYLBZA1?autoload=1&app_absent=0" target='_blank'>
          <div className=' fixed bottom-8 right-8 bg-white rounded-full p-4 hover:bg-green-400 text-green-400 hover:text-white ease-in duration-200'>
            <BsWhatsapp className=' text-4xl'/>
          </div>
        </a>


      </div>

      <div className='text-center'>
        <h1 className=' pt-24 text-7xl'>Quem Somos</h1>
        <p className=' pt-14'>Bem-vindo à nossa clínica, onde a saúde e o equilíbrio se encontram! Se você está em busca de alívio <br /> da dor, melhorias na postura ou deseja viver uma vida mais saudável e feliz, você está no lugar certo.</p>
        <p className=' pt-10'>Estamos aqui para ajudar você a se sentir melhor, viver melhor e alcançar o seu máximo potencial de saúde. Junte-se a nós nesta <br /> jornada para um bem-estar completo. Aguardamos ansiosamente por sua visita!</p>

        <div className='flex text-center'>
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
        
        <br />
      </div>
</div>
  )
}
