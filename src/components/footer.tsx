import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { TiktokIcon } from "./icons/tiktok";

export function Footer() {
  return (
    <footer className="flex justify-center items-center bg-white py-14 px-6">
      <div className="flex flex-1 max-w-[1150px]">
        <Reveal className="flex flex-col flex-1 gap-12 font-medium">
          <p className="text-[28px] text-black">Quiropraxia Mãos que Curam</p>

          <div className="flex flex-col gap-1.5">
            <p className="text-lg text-black">Horário de funcionamento:</p>
            <p className="text-secondary">08:00 - 20:00</p>
          </div>
        </Reveal>

        <div className="flex flex-1 justify-between">
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-xl font-medium">Navegação</p>

            <div className="flex flex-col gap-5 *:text-secondary *:font-medium *:hover:text-black *:duration-200 *:transition">
              <Link href="#services">Serviços</Link>

              <Link href="#about-us">Sobre nós</Link>

              <Link href="#pricing">Preços</Link>

              <Link href="#testimonials">Depoimentos</Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-6">
            <p className="text-xl font-medium">Contato</p>

            <div className="flex flex-col gap-5 text-secondary *:font-medium *:hover:text-black *:duration-200 *:transition">
              <Link href="tel:+55(11)91421-5301" className="flex gap-2.5">
                <Phone
                  className="text-white"
                  fill="#9c6349"
                  strokeWidth={1}
                  size={20}
                />

                <span>+55 (11) 91421-5301</span>
              </Link>

              <Link
                href="https://www.google.com/maps/place/Quiropraxia+M%C3%A3os+que+Curam/data=!4m2!3m1!1s0x0:0x72acd74cad4440d1?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2.5"
              >
                <MapPin
                  className="text-white"
                  fill="#9c6349"
                  strokeWidth={2}
                  size={20}
                />

                <span>São Paulo, SP</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col gap-6">
            <p className="text-xl font-medium">Redes Sociais</p>

            <div className="flex gap-2 items-center">
              <a
                href="https://www.instagram.com/quiropraxiamaosquecuram/"
                target="_blank"
                rel="noopener noreferrer"
                title="Link para o instagram da clínica Quiropraxia Mãos que Curam"
                className="group p-1 border border-secondary/20 rounded-md size-6 flex items-center justify-center"
              >
                <Instagram
                  size={12}
                  className="group-hover:scale-110 transition"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556296266060"
                target="_blank"
                rel="noopener noreferrer"
                title="Link para o facebook da clínica Quiropraxia Mãos que Curam"
                className="group p-1 border border-secondary/20 rounded-md size-6 flex items-center justify-center"
              >
                <Facebook
                  size={12}
                  className="group-hover:scale-110 transition"
                />
              </a>
              <a
                href="https://www.tiktok.com/@quiro.maosquecuram"
                target="_blank"
                rel="noopener noreferrer"
                title="Link para o tiktok da clínica Quiropraxia Mãos que Curam"
                className="group p-1 border border-secondary/20 rounded-md size-6 flex items-center justify-center"
              >
                <TiktokIcon className="size-3 group-hover:scale-110 transition" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
