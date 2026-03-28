import { useEffect } from "react";

function useMenu() {
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function openMenu() {
    const scrollbarWidth = getScrollbarWidth();

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
    document.body.style.paddingRight = "";
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove("menu--open");
      document.body.style.paddingRight = "";
    };
  }, []);

  return { openMenu, closeMenu };
}

export default useMenu;
