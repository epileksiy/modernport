import { motion } from 'framer-motion';
import React, { useEffect, useState} from 'react';


export default function Cursor ({clickToSee}) {
    
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const [mousePosition, setMousePosition] = useState({
        x: screenWidth/2,
        y: screenHeight/2 +90
    });

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(()=>{
        const mouseMove = e => {

            setMousePosition({
            x: e.clientX,
            y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () =>{
            window.removeEventListener("mosemove", mouseMove);
        }

    });

    const variants = {
        default: {
            x:mousePosition.x - 16,
            y:mousePosition.y - 16,
            backgroundColor: "rgb(255, 255, 255)"
        },
        text: {
            height: 250,
            width: 250,
            x:mousePosition.x - 125,
            y:mousePosition.y - 125,
            backgroundColor: "#deb2ed",
            opacity: 0.8,
            mixBlendMode: "hue"
        }
    }

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');
        
    return (
        <>
            <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="h-2/3 z-10 w-full flex flex-col justify-between">
                <div className="text-center text-white font-bold maintext flex flex-col items-center">
                    <p>HELLO WORLD.</p>
                    <div className="lanscape:text-sm portrait:text-xl md:text-3xl text-white glass rounded-md md:rounded-xl p-2 lg:p-7 md:font-bold">@sadhighkid</div>
                </div>
                <div className="text-white text-2xl font-semibold text-center mb-24 lg:mb-4 hover:text-3xl transition-all underline">
                    <p className="cursor-pointer" onClick={clickToSee}>Projects</p>
                </div>   
            </div>
            
            <motion.div
                className="cursor hidden lg:flex"
                variants={variants}
                animate={cursorVariant}
                style={{backgroundColor: "rgb(255, 255, 255)"}}
            />
        </>

    )
}