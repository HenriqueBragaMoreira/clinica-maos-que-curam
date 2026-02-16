import Link from "next/link";
import { Button } from "./button";

export function Navbar() {
  return (
    <header className="flex justify-center fixed top-0 left-0 right-0 z-50 bg-background py-5 w-full">
      <div className="flex items-center justify-between flex-1 max-w-[1150px]">
        <div>
          <h1 className="font-medium">Quiropraxia Mãos que Curam</h1>
        </div>

        <div className="flex items-center gap-6 *:font-medium *:font-satoshi *:hover:text-primary/70 *:duration-150 *:transition">
          <Link href="#services">Serviços</Link>
          <Link href="#about-us">Sobre nós</Link>
          <Link href="#prices">Preços</Link>
          <Link href="#testimonial">Depoimentos</Link>
        </div>

        <div>
          <Button>Agendar agora</Button>
        </div>
      </div>
    </header>
  );
}
