import { useEffect, useState } from "react";

import styles from "./index.module.scss";

export const ScrollTopButton: React.FC = () => {
  const [hasScrollButton, toggleButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleScrollButton = () => {
      const viewport = window.visualViewport?.height;
      const scrollPosition = window.pageYOffset;
      const percentage = (viewport && (scrollPosition * 100) / viewport) || 0;

      toggleButton(percentage > 80);
    };

    window.addEventListener("scroll", toggleScrollButton);

    return () => {
      window.removeEventListener("scroll", toggleScrollButton);
    };
  }, []);

  return hasScrollButton ? (
    <button
      type="button"
      data-testid="scroll-top--btn"
      className={styles.ScrollButton}
      onClick={handleScrollToTop}
    >
      Go to top
    </button>
  ) : null;
};
