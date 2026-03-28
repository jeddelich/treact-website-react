import { useEffect } from "react";

function useMenu() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove("menu--open");
    };
  }, []);

  return { openMenu, closeMenu };
}

export default useMenu;
