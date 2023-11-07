import Image from "next/image";
import logo from "../../public/logo.svg";
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <header className="xl:mx-20 min-h-screen">
        <div className="flex justify-around items-center">
          <div className="flex flex-col text-center">

            <h1 className="text-4xl 2xl:text-8xl md:text-6xl xl:text-7xl font-cursive">Quiropraxia Mãos Que Curam</h1>
            <div className="mt-12">
            <p className="text-xl mb-7">
              Não espere mais para dar o primeiro passo em direção a uma vida<br/>
               mais saudável e sem dor.
            </p>
            <p className="text-xl">
              Marque sua consulta conosco hoje mesmo e descubra como a<br/>
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

      <main className="px-20 min-h-screen">
        <div className="text-center">
        <h1 className="text-4xl 2xl:text-8xl md:text-6xl xl:text-7xl mb-12">Quem Somos</h1>
        <p className="mb-10">
          Bem-vindo à nossa clínica, onde a saúde e o equilíbrio se encontram!
          Se você está em busca de alívio <br /> da dor, melhorias na postura ou
          deseja viver uma vida mais saudável e feliz, você está no lugar certo.
        </p>
        <p className="mb-20">
          Estamos aqui para ajudar você a se sentir melhor, viver melhor e
          alcançar o seu máximo potencial de saúde. Junte-se a nós nesta <br />{" "}
          jornada para um bem-estar completo. Aguardamos ansiosamente por sua
          visita!
        </p>
        </div>

        <div className="flex justify-around flex-col items-center sm:flex-row sm:items-center gap-6">
          <div className="bg-gray-500 w-80 h-72">AA</div>
          <div className="bg-gray-500 w-80 h-72">AA</div>
          <div className="bg-gray-500 w-80 h-72">AA</div>
        </div>
      </main>

      <div className="px-20 min-h-screen text-center">
        <h1 className="text-4xl 2xl:text-8xl md:text-6xl xl:text-7xl mb-12">Nossos Tratamentos</h1>
        <p className="mb-16">
          Entendemos que cada paciente é único, com necessidades e metas
          individuais. Nosso compromisso é fornecer um atendimento <br />{" "}
          personalizado e compassivo, adaptado às suas necessidades específicas.
          Trabalharemos em estreita colaboração com você para criar <br /> um
          plano de tratamento que funcione.
        </p>
        <div className="flex justify-around flex-col items-center lg:flex-row sm:items-center gap-6">
          <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold">Pacote de 5 sessões</div>
          <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold">Pacote de 10 sessões</div>
          <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold">Pacote de 15 sessões</div>
          <div className="bg-purple-300 w-72 h-72 rounded-3xl font-bold">Pacote de 20 sessões</div>
        </div>
      </div>

      <div className="px-20 min-h-screen">
        <h1 className="text-4xl 2xl:text-8xl md:text-6xl xl:text-7xl mb-12 text-center">Onde Ficamos Localizados</h1>
        <div>
          <div>
            <p>Contato</p>
          </div>
        </div>
      </div>

      <footer className="bg-slate-500 text-center text-white">Desenvolved by braga</footer>
    </div>
  );
}
