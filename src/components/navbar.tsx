import Link from "next/link";
import { Button } from "./button";

export function Navbar() {
  return (
    <header className="flex justify-center fixed top-0 left-0 right-0 z-50 bg-background py-5 w-full">
      <div className="flex items-center justify-between flex-1 max-w-[1150px]">
        <div>
          <Link className="font-semibold font-playwrite" href="/">
            Quiropraxia Mãos que Curam
          </Link>
        </div>

        <div className="flex items-center gap-6 *:text-primary *:tracking-[-0.40px] *:leading-[25.6px] *:font-medium *:font-satoshi *:hover:text-primary/70 *:duration-150 *:transition">
          <Link href="#services">Serviços</Link>
          <Link href="#about-us">Sobre nós</Link>
          <Link href="#pricing">Preços</Link>
          <Link href="#testimonials">Depoimentos</Link>
        </div>

        <div>
          <Button>Agendar agora</Button>
        </div>
      </div>
    </header>
  );
}
