import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que desplaza la página al inicio cuando cambia la ruta
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambia la ruta, desplaza la ventana al inicio
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;
