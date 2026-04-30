"use client";

import { useEffect, useState } from "react";

/**
 * Retorna `true` quando a viewport está em largura de desktop (lg, ≥1024px).
 *
 * Usado para desativar os deslocamentos horizontais das animações no
 * mobile/tablet: como nessas larguras os elementos ocupam a largura toda,
 * um `translateX` de entrada gera overflow horizontal até a animação rodar.
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return isDesktop;
}
