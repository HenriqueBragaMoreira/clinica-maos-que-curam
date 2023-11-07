import Image from "next/image";
import logo from "../../public/logo.svg";
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <div className="mx-5 xl:mx-20">
        <header className="min-h-screen mb-14 lg:mb-0">
          <div className="flex justify-around items-center">
            <div className="flex flex-col text-center items-center">
            
              <h1 className="text-6xl 2xl:text-8xl md:text-6xl xl:text-7xl font-cursive mt-8 lg:mt-0">
                Quiropraxia Mãos Que Curam
              </h1>
              <Image
              src={logo}
              alt="Picture of the author"
              width={150}
              height={60}
              className=" mt-6 lg:mt-0 visible md:invisible md:hidden"
            />
              <div className="mt-12">
                <p className="text-xl font-semibold mb-7">
                  Não espere mais para dar o primeiro passo em direção a uma
                  vida
                  <br />
                  mais saudável e sem dor.
                </p>
                <p className="text-xl font-semibold">
                  Marque sua consulta conosco hoje mesmo e descubra como a<br />
                  quiropraxia pode melhorar a sua qualidade de vida.
                </p>
              </div>
            </div>

            <Image
              src={logo}
              alt="Picture of the author"
              width={420}
              height={620}
              className="invisible hidden sm:visible md:block"
            />
          </div>
          <a
            href="https://api.whatsapp.com/message/B76M6ZWBYLBZA1?autoload=1&app_absent=0"
            target="_blank"
          >
            <div className=" fixed bottom-8 right-8 bg-white rounded-full p-4 hover:bg-green-400 text-green-400 hover:text-white ease-in duration-200">
              <BsWhatsapp className=" text-4xl" />
            </div>
          </a>
        </header>

        <main className="md:min-h-screen mb-14 lg:mb-0">
          <div className="text-center">
            <h1 className="text-5xl font-semibold 2xl:text-8xl md:text-6xl xl:text-7xl mb-12">
              Quem Somos
            </h1>
            <p className="mb-10 font-semibold text-xl">
              Bem-vindo à nossa clínica, onde a saúde e o equilíbrio se
              encontram! Se você está em busca de alívio <br /> da dor,
              melhorias na postura ou deseja viver uma vida mais saudável e
              feliz, você está no lugar certo.
            </p>
            <p className="mb-20 font-semibold text-xl">
              Estamos aqui para ajudar você a se sentir melhor, viver melhor e
              alcançar o seu máximo potencial de saúde. Junte-se a nós nesta{" "}
              <br /> jornada para um bem-estar completo. Aguardamos ansiosamente
              por sua visita!
            </p>
          </div>

          <div className="flex justify-around flex-col items-center lg:flex-row sm:items-center gap-7">
            <div className="bg-gray-500 w-80 h-72">AA</div>
            <div className="bg-gray-500 w-80 h-72">AA</div>
            <div className="bg-gray-500 w-80 h-72">AA</div>
          </div>
        </main>

        <div className="md:min-h-screen text-center mb-8 lg:mb-0">
          <h1 className="text-5xl font-semibold 2xl:text-8xl md:text-6xl xl:text-7xl mb-12">
            Nossos Tratamentos
          </h1>
          <p className="mb-16 font-semibold text-xl">
            Entendemos que cada paciente é único, com necessidades e metas
            individuais. Nosso compromisso é fornecer um atendimento <br />{" "}
            personalizado e compassivo, adaptado às suas necessidades
            específicas. Trabalharemos em estreita colaboração com você para
            criar <br /> um plano de tratamento que funcione.
          </p>
          <div className="flex justify-around flex-col items-center lg:flex-row sm:items-center gap-6">
            <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold pt-4">
              Pacote de 5 sessões
            </div>
            <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold pt-4">
              Pacote de 10 sessões
            </div>
            <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold pt-4">
              Pacote de 15 sessões
            </div>
            <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold pt-4">
              Pacote de 20 sessões
            </div>
          </div>
        </div>

        <div className="md:min-h-screen">
          <h1 className="text-5xl font-semibold 2xl:text-8xl md:text-6xl xl:text-7xl mb-12 text-center">
            Onde Ficamos Localizados
          </h1>
          <div>
            <div className="mt-20 bg-purple-300 w-96 mr-6 h-96 rounded-3xl ml-0 lg:ml-16 mb-8 lg:mb-0">
              <p className="font-bold text-2xl text-center pt-4">Contato</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-1.5 bg-black w-full text-white text-center">
        Desenvolved by braga
      </footer>
    </div>
  );
}
