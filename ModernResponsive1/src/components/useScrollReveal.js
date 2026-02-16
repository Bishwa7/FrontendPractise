import { useEffect } from "react";




export default function useScrollReveal() {



  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");


    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.25
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();


  }, []);
}
