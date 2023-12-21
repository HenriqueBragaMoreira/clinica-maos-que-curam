import Image from "next/image";
import logo from "../../public/logo.svg";
import mid from "../../public/mid.jpg";
import left from "../../public/left.jpg";
import right from "../../public/right.jpg";
import { BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <div className="mx-5 xl:mx-20">
        <header className="min-h-screen mb-14 lg:mb-0 flex flex-col justify-center">
          <div className="flex justify-around items-center">
            <div className="flex flex-col text-center items-center">
              <h1 className="text-6xl 2xl:text-8xl md:text-6xl xl:text-7xl font-cursive mt-8 lg:mt-0">
                Quiropraxia Mãos<br/> Que Curam
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
              priority
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
            title="Link para o whatsapp da clínica"
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
            <Image className="w-[350px] h-96 rounded-lg border-solid border-[4px] border-white" src={left} alt="Foto da sala de quiropraxia"/>
            <Image className="w-[350px] h-96 rounded-lg border-solid border-[4px] border-white" src={mid} alt="Foto da recepção da clinica"/>
            <Image className="w-[350px] h-96 rounded-lg border-solid border-[4px] border-white" src={right} alt="Foto da sala de massoterapia"/>
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
            <div className="bg-purple-300 w-72 h-72 rounded-3xl pt-4 flex flex-col justify-between items-center py-2 px-4 border-solid border-white border-[3px]">
              <p className="text-lg font-bold">Pacote de 5 sessões</p>
              <p className="font-semibold">
                Desconecte do estresse diário e mime sua coluna com nosso Pacote
                Relaxamento de 5 sessões de quiropraxia. Liberte a tensão,
                promova o equilíbrio e renove sua vitalidade.
              </p>
              <button className="bg-gray-500 p-2 text-white rounded-md w-28">
                <a
                  target="_blank"
                  href="https://wa.me/5511914215301?text=Olá, tudo bem? Vim do site de vocês e queria saber mais sobre o pacote de 5 sessões!"
                >
                  Adquira já!
                </a>
              </button>
            </div>
            <div className="bg-purple-300 w-72 h-72 rounded-3xl pt-4 flex flex-col justify-between items-center py-2 px-4 border-solid border-white border-[3px]">
              <p className="text-lg font-bold">Pacote de 10 sessões</p>
              <p className="font-semibold">
                Invista na sua saúde com nosso Pacote Vitalidade de 10 sessões
                de quiropraxia. Redescubra o alívio duradouro, melhore a postura
                e fortaleça seu corpo para uma vida mais ativa.
              </p>
              <button className="bg-gray-500 p-2 text-white rounded-md w-28">
                <a
                  target="_blank"
                  href="https://wa.me/5511914215301?text=Olá, tudo bem? Vim do site de vocês e queria saber mais sobre o pacote de 10 sessões!"
                >
                  Adquira já!
                </a>
              </button>
            </div>
            <div className="bg-purple-300 w-72 h-72 rounded-3xl pt-4 flex flex-col justify-between items-center py-2 px-4 border-solid border-white border-[3px]">
              <p className="text-lg font-bold">Pacote de 15 sessões</p>
              <p className="font-semibold">
                Experimente uma transformação completa com nosso Pacote
                Renovação de 15 sessões de quiropraxia. Recupere a
                flexibilidade, reduza dores persistentes e sinta a diferença na
                sua qualidade de vida.
              </p>
              <button className="bg-gray-500 p-2 text-white rounded-md w-28">
                <a
                  target="_blank"
                  href="https://wa.me/5511914215301?text=Olá, tudo bem? Vim do site de vocês e queria saber mais sobre o pacote de 15 sessões!"
                >
                  Adquira já!
                </a>
              </button>
            </div>
            <div className="bg-purple-300 w-72 h-72 rounded-3xl pt-4 flex flex-col justify-between items-center py-2 px-4 border-solid border-white border-[3px]">
              <p className="text-lg font-bold">Pacote de 20 sessões</p>
              <p className="font-semibold">
                Cuide do seu corpo a longo prazo com o Pacote Total de 20
                sessões de quiropraxia. Uma jornada dedicada à saúde óssea e
                muscular, proporcionando bem-estar duradouro e vitalidade
                incomparável.
              </p>
              <button className="bg-gray-500 p-2 text-white rounded-md w-28">
                <a
                  target="_blank"
                  href="https://wa.me/5511914215301?text=Olá, tudo bem? Vim do site de vocês e queria saber mais sobre o pacote de 20 sessões!"
                >
                  Adquira já!
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="md:min-h-screen text-center mb-8 lg:mb-0">
          <h1 className="text-5xl font-semibold 2xl:text-8xl md:text-6xl xl:text-7xl mb-12 text-center">
            Onde Ficamos Localizados
          </h1>
          <div className="lg:flex lg:flex-row justify-around">
            <div className="mt-24 bg-purple-300 w-auto h-80 rounded-3xl border-solid border-white border-[3px]">
              <p className="font-bold text-2xl text-center pt-4">Contato</p>
              <div className="flex flex-col gap-8 mt-12 ml-8 mr-8">
                <div className="flex items-center gap-4">
                  <BsWhatsapp className="text-4xl" />
                  <p className="text-lg font-bold">(11) 91421-5301</p>
                </div>
                <div className="flex items-center gap-4">
                  <BsInstagram className="text-4xl" />
                  <p className="text-lg font-bold">@quiropraxiamaosquecuram</p>
                </div>
                <div className="flex items-center gap-4">
                  <BsTiktok className="text-4xl" />
                  <p className="text-lg font-bold">@quiro.maosquecuram</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <iframe
                title="Mapa com a localização da clinica interativo"
                className="mt-10 rounded-md border-solid border-4 border-purple-300 w-600 h-450"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117037.17676670375!2d-46.63592618531937!3d-23.55365014938566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f7198cb22a3%3A0x72acd74cad4440d1!2sQuiropraxia%20M%C3%A3os%20que%20Curam!5e0!3m2!1spt-BR!2sbr!4v1702688176993!5m2!1spt-BR!2sbr"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="p-1.5 mt-[490px] md:mt-[490px] sm:mt-[490px] lg:mt-auto bg-black w-full text-white text-center">
        Desenvolved by{" "}
        <a
          href="https://github.com/HenriqueBragaMoreira"
          className="font-bold underline underline-offset-1"
          target="_blank"
        >
          braga
        </a>
      </footer>
    </div>
  );
}
