"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react";
{/*
import emailjs from '@emailjs/browser';
*/}

const ContactPage = () => {

{/*
const [success,setSuccess] = useState(false);
const [error,setError] = useState(false);
const text = "Hello there! ";

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, 
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };
*/}

 return (
    <motion.div className="h-full overflow-scroll lg:overflow-hidden xl:overflow-hidden" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl lg:text-6xl xl:text-6xl">
            <div className="">hola {/* {text.split("").map((letter, index)=>(
                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index*0.1}}>{letter}</motion.span>
            ))} */} 😊</div>
        </div>
        {/* FORM CONTAINER */}
        <form
           /* onSubmit={sendEmail} */
            /*ref={form}*/ className="h-[80%] lg:h-full lg:w-1/2 bg-purple-50 rounded-xl text-lg lg:text-xl xl:text-xl flex flex-col gap-8 justify-center p-10 sm:p-18 md:p-24 lg:p-24 xl:p-24">
            <span className="pt-5">Equipo de Cyberstudio,</span>
            <textarea rows={10} className="bg-transparent border-b-2 border-b-black outline-none resize-none min-h-[2rem]"
            name="user_message"
            />
            <span>Mi correo electrónico es:</span>
            <input name="user_email" type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
            <span>Saludos!</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 lg:p-4 xl:p-4">Enviar</button>
             {/*{success && */ <span className="text-green-600 font-semibold">Tu mensaje se envió correctamente!</span>}
            {/* {error && */ <span className="text-red-600 font-semibold">Hubo un problema al enviar tu mensaje, por favor reinténtalo.</span>}
        </form>
    </div>
    </motion.div>
)
}

export default ContactPage