import { useState, useEffect } from 'react';

export function useWindowWidth():number {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  function updateWindowWidth():void {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return windowWidth;
}
