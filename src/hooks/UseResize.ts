import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function UseResize(width: number): any {
  const [showMain, setShowMain] = useState<boolean | null>(true);
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  const Resize = useDebouncedCallback(() => {
    if (window.innerWidth <= width) {
      setShowMain(false);
      setSlidesPerView(1);
    } else {
      setShowMain(true);
      setSlidesPerView(2);
    }
  }, 200);
  useEffect(() => {
    window.addEventListener("resize", Resize);
    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, [Resize]);

  return { showMain, slidesPerView };
}
