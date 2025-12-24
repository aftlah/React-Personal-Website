import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Type = () => {
   const typedRef = useRef(null);

   useEffect(() => {
      const typed = new Typed(typedRef.current, {
         strings:["Mahasiswa","Fullstack Web Developer", "Web Designer"],
         typeSpeed: 50,
         backSpeed: 50,
         backDelay: 400,
         loop: true,
         stringsElement: "#typed-strings",
         cursorChar: "🖊️",
      });
      return () => {
         typed.destroy();
      };
   }, []);

   return (
      <>
         <p className="font-medium text-slate-500 md:text-lg lg:text-xl"
            ref={typedRef}/>
      </>
   );
};

export default Type;
