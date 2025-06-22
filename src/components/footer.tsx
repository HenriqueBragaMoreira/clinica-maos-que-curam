import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { TiktokIcon } from './icons/tiktok';

export function Footer() {
  return (
    <footer className="flex justify-center items-center bg-white py-14 px-6">
      <div className="flex flex-1 max-w-[1150px]">
        <div className="flex flex-col flex-1 gap-12 font-medium">
          <p className="text-[28px] text-black">Quiropraxia Mãos que Curam</p>

          <div className="flex flex-col gap-1.5">
            <p className="text-lg text-black">Horário de funcionamento:</p>
            <p className="text-secondary">08:00 - 20:00</p>
          </div>
        </div>

        <div className="flex flex-1 justify-between">
          <div className="flex flex-col gap-6">
            <p className="text-xl font-medium">Navegação</p>

            <div className="flex flex-col gap-5 text-secondary font-medium">
              <a href="#services">Serviços</a>

              <a href="#about-us">Sobre nós</a>

              <a href="#prices">Preços</a>

              <a href="#testimonial">Depoimentos</a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-medium">Contato</p>

            <div className="flex flex-col gap-5 text-secondary font-medium">
              <a href="tel:+55(11)91421-5301" className="flex gap-2.5">
                <Phone
                  className="text-white"
                  fill="#9c6349"
                  strokeWidth={1}
                  size={20}
                />

                <span>+55 (11) 91421-5301</span>
              </a>

              <a href="mailto:test@gmail.com" className="flex gap-2.5">
                <Mail className="text-tertiary" size={20} />

                <span>test@gmail.com</span>
              </a>

              <a
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
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-medium">Redes Sociais</p>

            <div className="flex gap-2 items-center">
              <a
                href="https://www.instagram.com/quiropraxiamaosquecuram/"
                target="_blank"
                rel="noopener noreferrer"
                title="Link para o instagram da clínica Quiropraxia Mãos que Curam"
                className="p-1 border border-secondary/20 rounded-md"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556296266060"
                target="_blank"
                rel="noopener noreferrer"
                title="Link para o facebook da clínica Quiropraxia Mãos que Curam"
                className="p-1 border border-secondary/20 rounded-md"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.tiktok.com/@quiro.maosquecuram"
                target="_blank"
                rel="noopener noreferrer"
                title="Link para o tiktok da clínica Quiropraxia Mãos que Curam"
                className="p-1 border border-secondary/20 rounded-md"
              >
                <TiktokIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
